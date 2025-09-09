"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "./layouts/logo";
const profileRoutes = [
  {
    title: "STORE",
    routes: [
      {
        name: "Orders",
        icon: "/icons/Order_fill.png",
        link: "/dashboard/orders",
      },
      {
        name: "Subscription",
        icon: "/icons/Time_progress_fill.png",
        link: "/dashboard/subscriptions",
      },
    ],
  },
  {
    title: "ACCOUNT",
    routes: [
      {
        name: "Profile",
        icon: "/icons/User_alt_fill.png",
        link: "/dashboard/profile",
      },
      {
        name: "Loyalty Points",
        icon: "/icons/gift_alt_fill.png",
        link: "/dashboard/loyalty-points",
      },
      {
        name: "Chat with Customer Service",
        icon: "/icons/Chat_alt_2_fill.png",
        link: "/dashboard/chat",
      },
      {
        name: "Privacy Policy",
        icon: "/icons/Chield_alt_fill.png",
        link: "/dashboard/privacy-policy",
      },
    ],
  },
];

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = () => {
  return (
    <>
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent shadow-none p-0">
              <MenuIcon href="" src="/Dropdown.png" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[300px] bg-[#F8F7F2] border shadow-lg animate-in slide-in-from-right-2 duration-300 p-6"
            align="end"
            sideOffset={5}
          >
            {profileRoutes.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <DropdownMenuGroup className="space-y-4">
                  <DropdownMenuLabel className="text-xs font-normal text-[#4B4B4B] tracking-wider uppercase px-0 pb-0">
                    {section.title}
                  </DropdownMenuLabel>
                  <div className="space-y-1">
                    {section.routes?.map((route, routeIndex) => (
                      <DropdownMenuItem
                        key={routeIndex}
                        asChild
                        className="p-0"
                      >
                        <Link
                          href={route.link}
                          className="flex items-center gap-3 py-1 rounded-lg transition-colors group w-full cursor-pointer"
                        >
                          <div className="p-2 h-fit bg-[#EEEEEE] flex-shrink-0">
                            <Image
                              src={route.icon || "/placeholder.svg"}
                              alt={`${route.name} icon`}
                              width={20}
                              height={20}
                            />
                          </div>
                          <span className="text-sm font-semibold text-[#171717] group-hover:text-[#171717]/80">
                            {route.name}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuGroup>
                {sectionIndex < profileRoutes.length - 1 && (
                  <DropdownMenuSeparator className="my-6 bg-[#EEEEEE]" />
                )}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ProfileModal;

export const MobileProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent
          className="p-6 space-y-6  flex md:hidden "
          showOverlay={false}
        >
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
        </DrawerContent>
      </Drawer>
    </>
  );
};
