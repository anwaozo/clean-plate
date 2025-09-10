import Image from "next/image";
import Link from "next/link";

export default function AppCtaSection() {
  return (
    <section className="relative max-w-[1400px] mx-auto w-full pb-5 md:pb-0 pt-5 my-5 md:pt-5  rounded-none md:rounded-3xl overflow-hidden bg-[#F89E32] ">
      {/* <Image
        src="/Frame 2 (1).png"
        alt="MealPrep App on mobile phones"
        layout="fill"
        objectFit="cover"
        className="absolute rounded-[3rem] p-4 "
      /> */}
      <div className="relative z-10  flex  flex-col md:flex-row gap-10 justify-center items-center px-4 md:px-6 text-left text-white">
        <Image
          src="/Frame 111 (1).png"
          alt="MealPrep App on mobile phones"
          width={1000}
          height={800}
          className="   "
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bricolageG lg:text-5xl font-semibold mb-4">
            Ready to Upgrade Your Mealtime Routine?
          </h2>
          <p className="text-md md:text-lg  mb-8">
            Join Clean Plate today and enjoy fresh, chef-prepared meals
            delivered to your door. Convenient, healthy, and designed to fit
            your lifestyle with no stress, no hassle.
          </p>
          <div className="flex flex-row sm:flex-row justify-left  items-center gap-0">
            <Link href="#" className="">
              <Image
                src="/Group (1).png"
                alt="Apple App Store"
                width={150}
                height={200}
                className=""
              />
            </Link>
            <Link href="#" className="">
              <Image
                src="/google-play-badge 1.png"
                alt="Google Play"
                width={200}
                height={200}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
