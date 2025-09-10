import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Premium Plan",
      mealsPerWeek: "7 Meals",
      features: [
        "Save 10% on every subscription fulfilled",
        "Pause, cancel, or switch anytime",
        "20 loyalty points on orders over $50",
      ],
      buttonText: "Yes, Subscribe for plan",
      buttonVariant: "default",
    },
    {
      name: "Standard Plan",
      mealsPerWeek: "5 Meals",
      features: [
        "Flexible meal choices",
        "Pause or skip anytime",
        "20 loyalty points on orders over $50",
      ],
      buttonText: "Choose Plan",
      buttonVariant: "outline",
    },
    {
      name: "Essential Plan",
      mealsPerWeek: "3 Meals",
      features: [
        "Flexible meal choices",
        "Pause or skip anytime",
        "20 loyalty points on orders over $50",
      ],
      buttonText: "Choose Plan",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F7F2]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold font-bricolageG text-[#212121] mb-4 lg:mb-12">
            Ready to Eat Better{" "}
            <span className="text-[#F89E32]">
              <br />
              Without the Effort?
            </span>
          </h2>
          <p className="text-sm text-center lg:text-left px-10 font-semibold max-w-[400px] text-[#212121] mb-8">
            Sign up today and take the first step towards hassle-free, healthy
            living.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-[#EEEEEE] text-[#212121] hover:bg-[#2A8449] hover:col-span-1 hover:text-[#EEEEEE] rounded-2xl p-8 shadow-lg flex flex-col justify-start items-left  duration-300 group`}
            >
              <h3 className="text-xl text-left font-semi-bold mb-6">{plan.name}</h3>
              <p
                className={`text-mealprep-text-light text-left group-hover:text-white/80 text-lg font-bold mb-6 transition-colors duration-300`}
              >
                {plan.mealsPerWeek} <span className="text-sm text-[#878787]">/ Week</span>
              </p>
              <ul className="space-y-3 flex-grow list-disc border-t pt-10 border-dotted border-1 border-t-white px-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className=" text-left  gap-2">
                   
                    <span
                      className={`text-md  text-left font-semi-bold group-hover:text-white/90 transition-colors duration-300`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className=" text-mealprep-orange px-8 py-4 text-sm bg-white border-none rounded-lg group-hover:bg-[#F89E32] transition-colors  group-hover:text-mealprep-orange"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
