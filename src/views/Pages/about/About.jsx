import React from "react";
import Helmet from "../../../components/Helmet";
import AboutIntro from "../../../components/about/AboutIntro";
import OurStory from "../../../components/about/OurStory";
import Counter from "../../../components/about/Counter";
import CEOWord from "../../../components/about/CEOWord";
import Values from "../../../components/about/Values";
import Team from "../../../components/about/Team";
import CallToActionThree from "../../../components/CTA/CallToAction";
// import FooterTwo from "../../../../components/footer/FooterTwo";
// import FooterSecondary from "../../../../components/Footer";
// import CopyRightTwo from "../../../../components/footer/CopyRightTwo";


const About = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet pageTitle="About Customer Support" />
      {/* End Page SEO Content */}

      <AboutIntro />

      <OurStory />

      <Counter />

      <CEOWord />

      <Values />

      <Team />

      <CallToActionThree />
    </div>
  );
};

export default About;
