import React from "react";
import Helmet from "../components/Helmet";
import Hero from "../components/hero-banner/HeroBanner";
import AboutSection from "../components/about/AboutSection";
import Steps from "../components/Steps";
import WhyUs from "../components/faq/WhyUs";
import Pricing from "../components/pricing/Index";
import Testimonial from "../components/testimonial/Index";
import Faq from "../components/faq/Index";
import CallToAction from "../components/CTA/CallToAction";


const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet />
      {/* End Page SEO Content */}

      <Hero />
      <AboutSection />
      <Steps />
      <WhyUs />
      <Pricing />
      <Testimonial />
      <Faq />
      <CallToAction />
    </div>
  );
};

export default EventOrganizer;
