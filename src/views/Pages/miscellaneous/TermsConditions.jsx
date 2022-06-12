import React from "react";
import { Helmet } from "react-helmet";
import ScrollspyNav from "react-scrollspy-nav";

const TermsConditions = () => {
  return (
    <div className="doc-container main-page-wrapper">
      <Helmet>
        <title>
          Terms & Conditions || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =====================================================
				Terms and Condition
			===================================================== */}

      <div className="terms_and_policy">
        <div className="container">
          <ScrollspyNav
            scrollTargetIds={["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"]}
            activeNavClass="active"
            offset={170}
            scrollDuration="300"
          >
            <div className="row align-items-start">
              <div className="col-lg-4 sidenav-sticky">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#opt1">
                      1. Website terms of use
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt2">
                      2. Terms and conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt3">
                      3. Privacy policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt4">
                      4. Cookie policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt5">
                      5. Third Party Links
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt6">
                      6. GDPR
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Website Terms & Use</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      We have taken a number of steps to comply with the GDPR.
                      For more details about our compliance and how we handle
                      your data please check our latest legal documents below:
                    </p>
                    <ul>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                    </ul>
                    <h3>2. About us</h3>
                    <p>
                      When you use Ticket Tailor for selling tickets and
                      collecting data from your attendees you are the “data
                      controller” of all your attendees’ data. We are a “data
                      processor”, which means that we won’t do anything with
                      your attendees’ data other than what you need us to in
                      order to provide our service. We won’t be sending your
                      attendees any marketing emails, sharing their data with
                      anyone and if you want us to delete the data, just ask.
                      It’s your data. 100
                    </p>
                    <h3>3. Accessing our Website</h3>
                    <p>
                      The servers and databases that power Ticket Tailor are
                      located in the EU in Ireland. We inevitably use a small
                      number of third parties, some of which are outside of the
                      EU, to provide our ticketing service and we have contracts
                      with each of them that oblige them to comply with the
                      GDPR. You can find the full list of these third parties
                      and what we use them for here.
                    </p>
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">Terms & Conditions</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      This page, together with our Privacy Policy and the
                      Website Terms of Use tells you information about us and
                      the legal terms and conditions (the "Terms") on which we
                      make available to you our online ticket-selling solution
                      (the "Service").
                    </p>
                    <h3>2. Information about us</h3>
                    <p>
                      Tickettailor.com and buytickets.at and any of their
                      sub-domains is a site operated by Ticket Tailor, which is
                      the trading name of Zimma Ltd ("we", “our”, “us”). We are
                      registered in England and Wales under company number
                      07583551 and have our registered office at Unit 6, 14A
                      Andre St, London, E8 2AA. Our VAT number is GB184622203.
                    </p>
                    <p>
                      You can contact us by emailing{" "}
                      <a href="#">hi@deski.com</a>.
                    </p>
                  </div>
                  <div id="opt3">
                    <h2 className="font-gilroy-bold">Privacy policy</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      We have taken a number of steps to comply with the GDPR.
                      For more details about our compliance and how we handle
                      your data please check our latest legal documents below:
                    </p>
                    <ul>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                    </ul>
                    <h3>2. About us</h3>
                    <p>
                      When you use Ticket Tailor for selling tickets and
                      collecting data from your attendees you are the “data
                      controller” of all your attendees’ data. We are a “data
                      processor”, which means that we won’t do anything with
                      your attendees’ data other than what you need us to in
                      order to provide our service. We won’t be sending your
                      attendees any marketing emails, sharing their data with
                      anyone and if you want us to delete the data, just ask.
                      It’s your data. 100
                    </p>
                    <h3>3. Accessing our Website</h3>
                    <p>
                      The servers and databases that power Ticket Tailor are
                      located in the EU in Ireland. We inevitably use a small
                      number of third parties, some of which are outside of the
                      EU, to provide our ticketing service and we have contracts
                      with each of them that oblige them to comply with the
                      GDPR. You can find the full list of these third parties
                      and what we use them for here.
                    </p>
                  </div>
                  <div id="opt4">
                    <h2 className="font-gilroy-bold">Cookie policy</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      We have taken a number of steps to comply with the GDPR.
                      For more details about our compliance and how we handle
                      your data please check our latest legal documents below:
                    </p>
                    <ul>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                    </ul>
                    <h3>2. About us</h3>
                    <p>
                      When you use Ticket Tailor for selling tickets and
                      collecting data from your attendees you are the “data
                      controller” of all your attendees’ data. We are a “data
                      processor”, which means that we won’t do anything with
                      your attendees’ data other than what you need us to in
                      order to provide our service. We won’t be sending your
                      attendees any marketing emails, sharing their data with
                      anyone and if you want us to delete the data, just ask.
                      It’s your data. 100
                    </p>
                    <h3>3. Accessing our Website</h3>
                    <p>
                      The servers and databases that power Ticket Tailor are
                      located in the EU in Ireland. We inevitably use a small
                      number of third parties, some of which are outside of the
                      EU, to provide our ticketing service and we have contracts
                      with each of them that oblige them to comply with the
                      GDPR. You can find the full list of these third parties
                      and what we use them for here.
                    </p>
                  </div>
                  <div id="opt5">
                    <h2 className="font-gilroy-bold">Third Party Links</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      We have taken a number of steps to comply with the GDPR.
                      For more details about our compliance and how we handle
                      your data please check our latest legal documents below:
                    </p>
                    <ul>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                    </ul>
                    <h3>2. About us</h3>
                    <p>
                      When you use Ticket Tailor for selling tickets and
                      collecting data from your attendees you are the “data
                      controller” of all your attendees’ data. We are a “data
                      processor”, which means that we won’t do anything with
                      your attendees’ data other than what you need us to in
                      order to provide our service. We won’t be sending your
                      attendees any marketing emails, sharing their data with
                      anyone and if you want us to delete the data, just ask.
                      It’s your data. 100
                    </p>
                    <h3>3. Accessing our Website</h3>
                    <p>
                      The servers and databases that power Ticket Tailor are
                      located in the EU in Ireland. We inevitably use a small
                      number of third parties, some of which are outside of the
                      EU, to provide our ticketing service and we have contracts
                      with each of them that oblige them to comply with the
                      GDPR. You can find the full list of these third parties
                      and what we use them for here.
                    </p>
                  </div>
                  <div id="opt6">
                    <h2 className="font-gilroy-bold">GDPR</h2>
                    <div className="update-date">LAST UPDATED: 6/26/2020</div>
                    <h3>1. Introduction</h3>
                    <p>
                      We have taken a number of steps to comply with the GDPR.
                      For more details about our compliance and how we handle
                      your data please check our latest legal documents below:
                    </p>
                    <ul>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                    </ul>
                    <h3>2. About us</h3>
                    <p>
                      When you use Ticket Tailor for selling tickets and
                      collecting data from your attendees you are the “data
                      controller” of all your attendees’ data. We are a “data
                      processor”, which means that we won’t do anything with
                      your attendees’ data other than what you need us to in
                      order to provide our service. We won’t be sending your
                      attendees any marketing emails, sharing their data with
                      anyone and if you want us to delete the data, just ask.
                      It’s your data. 100
                    </p>
                    <h3>3. Accessing our Website</h3>
                    <p>
                      The servers and databases that power Ticket Tailor are
                      located in the EU in Ireland. We inevitably use a small
                      number of third parties, some of which are outside of the
                      EU, to provide our ticketing service and we have contracts
                      with each of them that oblige them to comply with the
                      GDPR. You can find the full list of these third parties
                      and what we use them for here.
                    </p>
                  </div>
                </div>
                {/*  /.tab-content */}
              </div>
            </div>
          </ScrollspyNav>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
