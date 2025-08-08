import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BrandLogo from "@/app/components/layouts/logo";
import Image from "next/image";

interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

interface ChatSidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
}

const ChatSidebar = ({
  chats,
  selectedChatId,
  onChatSelect,
}: ChatSidebarProps) => {
  return (
    <div className="min-h-full bg-white flex flex-col justify-between md:shadow-2xl rounded-[10px] md:py-4">
      <div className="p-4 flex flex-col items-center justify-center gap-3">
        <Image src="/Logo 4.svg" alt="Status List" height={40} width={40} />
        <h1 className="text-xl font-semibold text-[#212121] text-center leading-tight">
          Welcome to MealPrep.co Support.
        </h1>
      </div>

      <div className="space-y-4 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`p-4 border-b border-[#E9EDF7]  cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedChatId === chat.id ? "border-l-4 border-l-[#FE7438]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#CACACA] rounded-full flex items-center justify-center text-white text-base relative">
                MM
                <div className="w-2.5 h-2.5 bg-[#2A8449] rounded-full absolute bottom-0 right-0 border border-white"></div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#4B4B4B] truncate">
                  {chat.lastMessage}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[#4B4B4B] text-sm">
                  <span className="font-bold">Mercy</span>
                  <span className="text-[11px] flex-shrink-0">
                    {chat.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button
          className="w-full bg-[#F8F7F2] hover:bg-[#F8F7F2] text-[#FE7438] font-semibold p-2.5 h-fit flex items-center gap-2"
          onClick={() => console.log("New chat")}
        >
          <Plus size={16} className="text-white bg-[#FE7438] rounded-full w-fit h-fit" />
          New chat
        </Button>
      </div>
    </div>
  );
};

export default ChatSidebar;
