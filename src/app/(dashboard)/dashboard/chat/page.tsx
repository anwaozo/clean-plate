"use client";
import React, { useState } from "react";
import ChatSidebar from "../../_components/chat-sidebar";
import ChatWindow from "../../_components/chat-window";

const page = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const chats = [
    {
      id: "1",
      title: "Welcome to MealPrep.co Support.",
      lastMessage: "Hello! Let me confirm that for you",
      timestamp: "30 days ago",
      unread: false,
    },
    {
      id: "2",
      title: "Welcome to MealPrep.co Support.",
      lastMessage: "Hello! Let me confirm that for you",
      timestamp: "30 days ago",
      unread: false,
    },
  ];

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    setIsMobileView(true);
  };

  const handleBackToList = () => {
    setIsMobileView(false);
    setSelectedChatId(null);
  };

  return (
    <div className="min-h-screen flex md:bg-[#F8F7F2] md:py-12">
      <div className="max-w-[1350px] mx-auto md:border border-dashed border-[#EEEEEE] py-2 md:py-6 px-4 lg:px-6 rounded-xl flex md:bg-white w-full">
        <div
          className={`${
            selectedChatId && isMobileView ? "hidden" : "block"
          } lg:block w-full md:max-w-[310px] h-full`}
        >
          <ChatSidebar
            chats={chats}
            selectedChatId={selectedChatId}
            onChatSelect={handleChatSelect}
          />
        </div>
        <div
          className={`${
            !selectedChatId || !isMobileView ? "hidden" : "block"
          } lg:block flex-1 md:ml-8`}
        >
          <ChatWindow chatId={selectedChatId} onBack={handleBackToList} />
        </div>
      </div>
    </div>
  );
};

export default page;
