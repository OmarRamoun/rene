import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loader";

const ScrollTopBehaviour = React.lazy(() =>
  import("../components/ScrollTopBehaviour")
);

const Home = React.lazy(() => import("../views/Home"));
const About = React.lazy(() => import("../views/Pages/about/About"));

// FEATURES
const Features = React.lazy(() => import("../views/Pages/service/Features"));
const FeatureDetails = React.lazy(() =>
  import("../views/Pages/service/FeatureDetails")
);

// // PORTFOLIO
const Portfolio = React.lazy(() =>
  import("../views/Pages/portfolio/Portfolio")
);
const PortfolioDetails = React.lazy(() =>
  import("../views/Pages/portfolio/PortfolioDetails")
);

// // BLOGS
const Blog = React.lazy(() => import("../views/Pages/Blog/Blog"));
const BlogDetails = React.lazy(() => import("../views/Pages/Blog/BlogDetails"));

// CONTACT US
const Contact = React.lazy(() => import("../views/Pages/contact/Contact"));

// // MISC.
// const Pricing = React.lazy(() => import("../views/Pages/pricing/Pricing"));
// const Team = React.lazy(() => import("../views/Pages/team/Team"));
// const TeamDetails = React.lazy(() => import("../views/Pages/team/TeamDetails"));
// // Team inner pages
// const Faq = React.lazy(() => import("../views/Pages/Faq/Faq"));
// const FaqDetails = React.lazy(() => import("../views/Pages/Faq/FaqDetails"));
// const TermsConditions = React.lazy(() =>
//   import("../views/Pages/miscellaneous/TermsConditions")
// );
// const SolutionMangement = React.lazy(() =>
//   import("../views/Pages/features/SolutionMangement")
// );

// LOGIN / SIGNUP
const Login = React.lazy(() => import("../views/Pages/miscellaneous/Login"));
const SignUp = React.lazy(() => import("../views/Pages/miscellaneous/SignUp"));

// Not Found Page
const NotFound = React.lazy(() => import("../views/NotFound"));

const Routes = () => {
  const location = useLocation();
  const paramList = [
    "/",
    "/about",
    "/features",
    "/portfolio",
    "/blog",
    "/contact",
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollTopBehaviour />
        {paramList.includes(location.pathname) && <Header />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          {/* Features */}
          <Route path="/features" component={Features} />
          <Route path="/feature-details" component={FeatureDetails} />

          {/* Portfolio */}
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio-details" component={PortfolioDetails} />

          {/* Blog */}
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />

          {/* Contact Us */}
          <Route path="/contact" component={Contact} />

          {/* Misc. */}
          {/* <Route path="/pricing" component={Pricing} /> */}
          {/* <Route path="/team" component={Team} /> */}
          {/* <Route path="/team-details" component={TeamDetails} /> */}
          {/* Faq */}
          {/* <Route path="/faq" component={Faq} /> */}
          {/* <Route path="/faq-details" component={FaqDetails} /> */}
          {/* Footer Links */}
          {/* <Route path="/terms-conditions" component={TermsConditions} /> */}
          {/* <Route path="/solution-management" component={SolutionMangement} /> */}

          {/* Login/Signup */}
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />

          {/* NotFound Route */}
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        {paramList.includes(location.pathname) && <Footer />}
      </Suspense>
    </>
  );
};

export default Routes;
