"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import MobileNav from "../../components/mobile-nav";
import { useState } from "react";

import { Header as NAV_ITEMS } from "../../../../cms-services/common";
import BrandLogo, { MenuIcon } from "../../components/layouts/logo";
import { X } from "lucide-react";
import CartModal from "../../components/cart-modal";
import { usePathname } from "next/navigation";
import path from "path";
import ProfileModal from "@/app/components/profile-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const pathname = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hide = pathname === "dashboard";

  // console.log(path)

  console.log(hide);

  return (
    <>
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
            {/* <MenuIcon href="" src="/icons/Bag_light.png" /> */}
            <div onClick={() => setIsCartOpen(!isCartOpen)}>
              <MenuIcon href="" src="/icons/Bag_light.png" />
            </div>
            <div onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <MenuIcon href="" src="/Dropdown.png" />
            </div>
          </div>
          <div className="hidden lg:flex items-left  justify-left gap-4">
            <MenuIcon href="" src="/icons/Search_alt_light.png" />
            <div onClick={() => setIsCartOpen(!isCartOpen)}>
              <MenuIcon href="" src="/icons/Bag_light.png" />
            </div>
            <div onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <MenuIcon href="" src="/Dropdown.png" />
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        headerRoutes={NAV_ITEMS}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div>
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      </div>
    </>
  );
};

export default Header;
