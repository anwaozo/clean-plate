import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MealPlanningSection() {
  return (
    <section className="py-10 bg-[#F8F7F2] px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-5 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider  text-[#212121] bg-mealprep-orange/10 px-3 py-1 rounded-full mb-0 inline-block">
            We're Your Partner in Living Better.
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#23272E] px-10 md:px-0 mt-2 font-bricolageG">
            Meal Planning Made Simple
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <div className="bg-mealprep-orange/10 p-3 rounded-full">
                <Image
                  src={"/icons/food_13747421 1.png"}
                  width={30}
                  height={30}
                  alt="food"
                />
              </div>
              <h3 className="text-lg font-bold font-bricolageG text-mealprep-dark-brown mb-1">
                Pick Your Meals
              </h3>
              <p className="text-md text-mealprep-text-light">
                Browse our weekly menu and select your favorite dishes.
              </p>
            </div>

            <div className="">
              <div className="bg-mealprep-orange/10 p-3 rounded-full">
                <Image
                  src="/icons/subscription_1260204 1.png"
                  alt="Subscription Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h3 className="text-lg  font-bricolageG font-semibold text-mealprep-dark-brown mb-1">
                  Choose One-off{" "}
                  <span className="text-[#F89E32]">
                    {" "}
                    or a Subscription Plan
                  </span>
                </h3>
                <p className="text-md text-mealprep-text-light">
                  Browse our weekly menu and select your favorite dishes.
                </p>
              </div>
            </div>
          </div>
          <div className=" relative lg:flex justify-center">
            <Image
              src="/Group 41.png"
              alt="Chef with fresh food"
              width={450}
              height={450}
              className=" object-cover  "
            />
          </div>
          <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
            <div className="">
              <div className="bg-mealprep-orange/10 p-3 rounded-full">
                <Image
                  src="/icons/delivery-man_3017247 1.png"
                  alt="Subscription Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-bricolageG text-mealprep-dark-brown mb-1">
                  Delivered Fresh to Your Door
                </h3>
                <p className="text-md text-mealprep-text-light">
                  Your meals arrive chilled and ready to heat. No prep, no mess.
                </p>
              </div>
            </div>
            <div className="">
              <div className="bg-mealprep-orange/10 p-3 rounded-full">
                <Image
                  src="/icons/podium_1837059 1.png"
                  alt="Subscription Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mealprep-dark-brown mb-1">
                  Earn Rewards While You Eat
                </h3>
                <p className="text-md text-mealprep-text-light">
                  Collect loyalty points with every order and unlock exclusive
                  perks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href={"/subscription-plans"}>
            <Button className="bg-primary text-white px-8 py-6 text-md rounded-lg hover:bg-primary ">
              Choose a Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
