import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import AosClient from "./components/aos-client";

export const metadata = {
  title: {
    template: "%s",
    default: "Welcome | Meal Prep",
  },
  description: {
    template: "%s",
    default: "",
  },
};

const BricolageG = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${BricolageG.variable}`}>
      <body className={`antialiased`} suppressHydrationWarning>
        {/* <AosClient> */}

        {children}
        {/* </AosClient> */}
      </body>
    </html>
  );
}
