import React from "react";
import HeroSection from "../components/hero-section";
import { metaTags } from "../../../cms-services/home";
import BestsellersSection from "../components/best-sellers";
import MealPlanningSection from "../components/meal-planning-sec";
import RewardsSection from "../components/reward-section";
import TestimonialsSection from "../components/testimonials";
import AppCtaSection from "../components/app-cta-section";
import PricingSection from "../components/pricing-section";

export const metadata = {
  title: `${metaTags.metatitle}`,
  description: `${metaTags.metaDescription}`,
};
const page = () => {
  return (
    <div>
      <HeroSection />
      <BestsellersSection />
      <MealPlanningSection />
      <RewardsSection />
      <TestimonialsSection />
      <AppCtaSection/>
      <PricingSection/>
    </div>
  );
};

export default page;
