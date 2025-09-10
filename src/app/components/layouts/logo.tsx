import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Brandlogo as url } from "../../../../cms-services/common";
const BrandLogo = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  return (
    <Link href={"/"}>
      <Image
        src={url.image}
        alt="logo"
        width={size === "sm" ? 100 : 120}
        height={150}
      />
    </Link>
  );
};

export default BrandLogo;

export const BrandLogoWhite = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/Frame 2087327326 (1).png"}
        alt="logo"
        width={size === "sm" ? 150 : 250}
        height={150}
      />
    </Link>
  );
};

export const MenuIcon = ({ href, src }: { href?: string; src: string }) => {
  return (
    <Link href={href ?? "/"}>
      <Image src={src} alt="icon" height={26} width={26} />
    </Link>
  );
};
