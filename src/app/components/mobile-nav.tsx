import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Brandlogo } from "../../../cms-services/common";
const MobileNav = ({ headerRoutes, isMenuOpen, toggleMenu }: any) => {
  return (
    <div
      className={`fixed font-archivo inset-0 bg-[#ECEBE9] z-50 transform transition-transform duration-300 ease-in-out p-6 space-y-4 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-between items-center">
        <Image
          src={Brandlogo.image}
          alt="logo"
          width={129}
          height={24}
        />
        <button type="button" onClick={toggleMenu} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4 ">
        {headerRoutes?.menu?.map((route: any, index: number) => (
          <Link
            key={index}
              className="text-[#4B4B4B] text-base p-2"
            href={route.linkPath || ""}
            onClick={toggleMenu}
          >
            {route.linkLabel}
          </Link>
        ))}
      </div>
    
    </div>
  );
};

export default MobileNav;
