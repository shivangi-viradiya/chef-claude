import { useState } from "react";

const ConditionalRender = () => {
  const [unreadMessages, setunreadMessages] = useState([
    "a",
    "r",
    "y",
    "k",
    "j",
    "i",
  ]);

  let text;

  if (unreadMessages === 0) {
    text = "You're all caught up!";
  } else if (unreadMessages.length === 1) {
    text = "You have 1 unread message";
  } else {
    text = `You have ${unreadMessages.length} unread message`;
  }

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default ConditionalRender;
