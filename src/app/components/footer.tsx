import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { BrandLogoWhite } from "./layouts/logo";

export default function Footer() {
  return (
    <footer className="bg-[#2A8449] text-white py-16">
      <div className="max-w-[1400px] mb-10 flex flex-col lg:flex-row justify-between items-left lg:items-center px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-left text-left lg:max-w-sm md:items-start w-full">
          <p className="text-lg text-white text-left">
            Get 20% off your first order
          </p>
          <p className="text-xs text-white">
            By submitting, you agree to receive emails from Clean Plate. View
            our{" "}
            <Link href="#" className="underline hover:text-mealprep-orange">
              Privacy Policy
            </Link>{" "}
            and you can unsubscribe anytime.
          </p>
        </div>

        <form className="flex gap-2 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full lg:w-[500px] focus:ring-mealprep-orange focus:border-mealprep-orange"
          />
          <Button className="bg-primary text-white text-sm hover:bg-mealprep-orange/90">
            Get Promo
          </Button>
        </form>
      </div>
      <div className="max-w-[1400px] border-t  pt-8  border-white/10 mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            <BrandLogoWhite />
          </Link>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold mb-2">More Info</h3>
          <ul className="space-y-6 text-sm text-white/80">
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/subscriptions"
                className="hover:text-mealprep-orange transition-colors"
              >
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold mb-2">Company</h3>
          <ul className="space-y-6 text-sm text-white/80">
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Media and Press
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold mb-2">Social Media</h3>
          <ul className="space-y-6 text-sm text-white/80">
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-mealprep-orange transition-colors"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] flex flex-col lg:flex-row justify-between items-center mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        <p>Copyright &copy;{new Date().getFullYear()} Cleanplate</p>
        <div className="flex gap-4 mt-4">
          <Link
            href="#"
            className="text-white hover:text-mealprep-orange transition-colors"
          >
            <Image src="/Button (3).png" width={40} height={40} alt="" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-mealprep-orange transition-colors"
          >
            <Image src="/Button (4).png" width={40} height={40} alt="" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-mealprep-orange transition-colors"
          >
            <Image src="/Button (5).png" width={40} height={40} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
