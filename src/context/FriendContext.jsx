import { createContext, useContext, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const FriendContext = createContext();

function FriendProvider({ children }) {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function hundleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <FriendContext.Provider
      value={{
        friends,
        selectedFriend,
        showAddFriend,
        handleSelection,
        hundleShowAddFriend,
        handleAddFriend,
        handleSplitBill,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}

export function useFriend() {
  const context = useContext(FriendContext);
  if (!context) {
    throw new Error("useFriend must be used within a FriendProvider");
  }
  return context;
}

export default FriendProvider;
