"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const profileRoutes = [
  {
    title: "STORE",
    routes: [
      {
        name: "Orders",
        icon: "/icons/Order_fill.png",
        link: "/orders",
      },
      {
        name: "Subscription",
        icon: "/icons/Time_progress_fill.png",
        link: "/subscriptions",
      },
    ],
  },
  {
    title: "ACCOUNT",
    routes: [
      {
        name: "Profile",
        icon: "/icons/User_alt_fill.png",
        link: "/profile",
      },
      {
        name: "Loyalty Points",
        icon: "/icons/gift_alt_fill.png",
        link: "/loyalty-points",
      },
      {
        name: "Chat with Customer Service",
        icon: "/icons/Chat_alt_2_fill.png",
        link: "/chat",
      },
      {
        name: "Privacy Policy",
        icon: "/icons/Chield_alt_fill.png",
        link: "/privacy-policy",
      },
    ],
  },
];

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />

      <div className="fixed top-18 right-6 z-50 w-[300px] bg-[#F8F7F2] rounded-md border shadow-lg animate-in slide-in-from-right-2 duration-300">
        <div className="p-6 space-y-6">
          {profileRoutes.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-xs font-normal text-[#4B4B4B] tracking-wider uppercase">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.routes.map((route, routeIndex) => (
                  <Link
                    key={routeIndex}
                    href={route.link}
                    onClick={onClose}
                    className="flex items-center gap-3 py-1 rounded-lg transition-colors group"
                  >
                    <div className="p-2 h-fit bg-[#EEEEEE] flex-shrink-0">
                      <Image
                        src={route.icon}
                        alt={`${route.name} icon`}
                        width={20}
                        height={20}
                        className=""
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#171717] group-hover:text-[#171717]/80">
                      {route.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
