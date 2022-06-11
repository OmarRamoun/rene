import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>.
        <title>Rene - Saas Project management for the rest of us</title>
        <meta property="og:site_name" content="rene" />
        <meta
          property="og:url"
          content="https://renesaas.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rene: Creative PM Saas as simple as possible"
        />
        <meta
          name="keywords"
          content="agency, business, clean, corporate, creative, minimal, modern, multipurpose, portfolio, showcase, Project Management Saas agency, software company, sass, omarramoun"
        />
        <meta
          name="description"
          content="Rene is an easy to use creative saas for project managment."
        />
        <meta name="description" content="Saas Project Managment Application with a shallow learning curve" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
