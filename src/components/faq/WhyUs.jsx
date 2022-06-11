import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Start in 5 Minutes",
    desc: `It only takes 5 minutes. Register for a new account. Choose a plan or try a demo. Download the software`,
    expand: "a",
  },
  {
    title: "It's Easy to Use",
    desc: `You don't need tutorials or courses. The interface is so intuitive and easy to use. You will be able to use the software from the get go.`,
    expand: "b",
  },
  {
    title: "Support By Humans Not Bots",
    desc: `We have the best customer support team on the web and we are sure of that. We are always there to help you 24/7 at any timezone.`,
    expand: "c",
  },
];

const WhyUs = () => {
  return (
    <div className="fancy-text-block-six overflow-hidden mt-250 md-mt-200">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="title-style-five mb-35">
              <h6>Why choose us</h6>
              <h2>
                <span>Why you should</span> choose us?
              </h2>
            </div>
            {/* End title */}
            <div className="accordion-style-two pr-5">
              <div className="faq-wrraper">
                <Accordion preExpanded={["a"]} allowZeroExpanded>
                  {FaqContent.map((item, i) => (
                    <AccordionItem className="card" key={i} uuid={item.expand}>
                      <AccordionItemHeading className="card-header">
                        <AccordionItemButton>
                          <h5 className="mb-0">
                            <button className="btn btn-link">{item.title}</button>{" "}
                          </h5>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {/* Accordion Heading */}
                      <AccordionItemPanel className="card-body fadeInUp">
                        <p>{item.desc}</p>
                      </AccordionItemPanel>
                      {/* Accordion Body Content */}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-8 m-auto"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="illustration-holder d-flex justify-content-end md-mt-50">
              <img src="images/assets/feature-img-07.png" alt="media" />
              <img
                src="images/shape/113.svg"
                alt="media"
                className="shapes shape-one"
              />
              <img
                src="images/shape/113.svg"
                alt="media"
                className="shapes shape-two"
              />
            </div>
            {/* /.illustration-holder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
