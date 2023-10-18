interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

import React from "react";

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return <div>ChatWelcome</div>;
};
