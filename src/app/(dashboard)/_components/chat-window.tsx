"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "user" | "operator";
  timestamp: string;
  senderName?: string;
}

interface ChatWindowProps {
  chatId: string | null;
  onBack: () => void;
}

const ChatWindow = ({ chatId, onBack }: ChatWindowProps) => {
  const [message, setMessage] = useState("");
  const date = new Date();

  const messages: Message[] = [
    {
      id: "1",
      text: "How can we help you today?",
      sender: "operator",
      timestamp: "Oct 10, 2024",
      senderName: "Operator",
    },
    {
      id: "2",
      text: "I wanted to know if my order is being processed currently? I might have some other meals to add",
      sender: "user",
      timestamp: "30 days ago",
    },
    {
      id: "3",
      text: "Hello! Let me confirm that for you",
      sender: "operator",
      timestamp: "30 days ago",
      senderName: "Mercy",
    },
    {
      id: "4",
      text: "I wanted to know if my order is being processed currently? I might have some other meals to add",
      sender: "user",
      timestamp: "30 days ago",
    },
    {
      id: "5",
      text: "Please let me know ASAP!",
      sender: "user",
      timestamp: "30 days ago",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (!chatId) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="h-full md:bg-white flex flex-col">
      <div className="md:py-4 flex md:items-center md:justify-center gap-3">
        <div className="flex items-center gap-2 md:hidden w-full">
          <Button
            variant="ghost"
            size="sm"
            className="p-0"
            onClick={onBack}
          >
            <ChevronLeft size={20} />
          </Button>
          <p className="flex items-center justify-center w-full text-center">Operator</p>
        </div>

        <div className="hidden md:flex items-center justify-center gap-3 bg-[#F8F7F2] p-2.5 rounded-[10px] text-[#4B4B4B]">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto md:px-4 py-4 space-y-4 ">
        <div className="flex md:hidden justify-center items-center mt-8">
          <div className="w-fit bg-[#F8F7F2] p-2.5 rounded-[10px] text-[#4B4B4B] mb-2">
            {date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md ${
                msg.sender === "user" ? "order-2" : "order-1"
              }`}
            >
              {msg.senderName === "Mercy" && (
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-white">
                    {msg.senderName?.charAt(0)}
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs text-gray-600">
                      {msg.senderName || "User"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              )}

              {msg.sender === "user" && (
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs text-gray-600">You</span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-[#F89E32] text-white"
                    : "bg-gray-100 text-[#4B4B4B]"
                }`}
              >
                {msg.sender === "operator" && msg.senderName === "Operator" && (
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-[#CACACA] rounded-full flex items-center justify-center text-xs text-white">
                      {msg.senderName?.charAt(0) || "O"}
                    </div>
                    <span className="text-xs text-[#4B4B4B]">{"Operator"}</span>
                  </div>
                )}
                <p className="text-sm">{msg.text}</p>
              </div>

              <div
                className={`mt-1 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:py-4">
        <div className="flex-1 relative">
          <Button
            variant="ghost"
            className="text-[#4B4B4B] absolute left-2 top-1/2 transform -translate-y-1/2 z-10 rounded-none p-0 px-1 border-r border-[#EEEEEE] shadow-none"
          >
            <Image
              src="/paper_clip_light.png"
              alt="clip icon"
              height={24}
              width={24}
            />
          </Button>

          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="pl-12 pr-0 py-2.5 h-fit border-gray-300 rounded-lg shadow-none"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />

          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-[#F89E32] hover:bg-[#F89E32]/90 text-white absolute right-2 top-1/2 transform -translate-y-1/2 disabled:opacity-50 py-2.5 h-fit shadow-none"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
