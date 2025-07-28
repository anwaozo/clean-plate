import React from "react";
import AboutHero from "../components/about-hero";
import AboutContact from "../components/about-contact";
import AboutPlatforms from "../components/about-platforms";
import AboutQuote from "../components/about-quote";
import AboutCTA from "../components/about-cta";
import AboutMission from "../components/about-mission";
import { metaTags } from "../../../cms-services/about";

export const metadata = {
  title: `${metaTags.metatitle}`,
  description: `${metaTags.metaDescription}`,
};
const page = () => {
  return (
    <div className="font-archivo">
      <AboutHero />
      <AboutContact />
      <AboutPlatforms />
      <AboutMission />
      {/* <FeaturedListings /> */}
      <AboutQuote />
      {/* <Testimonials /> */}
      <div className="py-20 ">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-2e55464e-234c-4fb3-b6aa-3162a0695ba9"
          data-elfsight-app-lazy
        ></div>
      </div>
      <AboutCTA />
    </div>
  );
};

export default page;
