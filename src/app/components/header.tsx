"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import MobileNav from "./mobile-nav";
import { useState } from "react";

import { Header as NAV_ITEMS } from "../../../cms-services/common";
import BrandLogo, { MenuIcon } from "./layouts/logo";
import { Hamburger, Menu, X } from "lucide-react";
import CartModal from "./cart-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#212121] px-4 text-white text-center py-2 text-sm flex items-center justify-between gap-2">
        <div></div>
        <div className="flex justify-center items-center gap-2">
          {" "}
          <span className="text-center text-xs">
            You'll get 2 free meals on your first subscription
          </span>
          <Link href="/sign-up">
            <Button
              variant="secondary"
              size="sm"
              className="bg-primary text-white rounded-full hover:bg-gray-100"
            >
              Signup
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className=" h-6 w-6 text-white hover:bg-mealprep-orange/80"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close banner</span>
        </Button>
      </div>
      <header className="font-archivo bg-white px-4 lg:px-6 sticky top-0 z-50 py-2 lg:py-0">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex justify-center gap-10 items-center">
            <div className="flex gap-2 items-center ">
              <Button
                variant="outline"
                className="flex lg:hidden h-fit border-none p-1 shadow-none"
                onClick={toggleMenu}
              >
                <Image
                  src={"/Status_list.png"}
                  alt="phone icon"
                  height={24}
                  width={24}
                />
              </Button>
              <BrandLogo />
            </div>

            <div className="hidden gap-2 lg:flex ">
              {NAV_ITEMS.menu.map(
                (
                  route: { linkPath: string; linkLabel: string },
                  index: number
                ) => (
                  <Link
                    key={index}
                    className="text-[#4B4B4B] text-base p-5"
                    href={route.linkPath || ""}
                  >
                    {route.linkLabel}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="flex lg:hidden items-center  justify-center gap-2">
            {/* <MenuIcon href="" src="/icons/Search_alt_light.png" /> */}
            <MenuIcon href="" src="/icons/Bag_light.png" />
            <MenuIcon href="" src="/icons/User_cicrle_light.png" />
          </div>
          <div className="hidden lg:flex items-left  justify-left gap-4">
            <MenuIcon href="" src="/icons/Search_alt_light.png" />
            <div onClick={() => setIsCartOpen(true)}>
              <MenuIcon src="/icons/Bag_light.png" />
            </div>
            <MenuIcon href="" src="/icons/User_cicrle_light.png" />
          </div>
        </div>
      </header>

      <MobileNav
        headerRoutes={NAV_ITEMS}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
