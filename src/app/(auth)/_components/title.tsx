import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Title = ({
  title,
  text,
  href,
  hrefText,
  centerText,
}: {
  title: string;
  text: string;
  href: string;
  hrefText: string;
  centerText?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 mb-10">
      <Image src={"/Logo 4.svg"} alt="Logo" width={24} height={24} />
      <h3 className="text-[#0A0A0A] text-[32px] font-semibold font-bricolageG leading-10">
        {title}
      </h3>
      <p
        className={cn(
          "text-[#171717]  font-bold text-sm",
          centerText ? "text-center" : "text-left"
        )}
      >
        {text}
        {hrefText && (
          <Link href={href} className="pl-2 text-[#4B4B4B] underline">
            {hrefText}
          </Link>
        )}
      </p>
    </div>
  );
};

export default Title;
