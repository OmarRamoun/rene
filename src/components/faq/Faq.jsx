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
    title: "What is Rene?",
    desc: `Rene is a project managment software that is so easy to use with no prior experience.`,
    expand: "a",
  },
  {
    title: "What is Project Management Softwares?",
    desc: `Those are softwares that allow you to keep track of the life cycle of your different projects to be able to deliver them on time. Either those projects are technical pojrects or daily life tasks`,
    expand: "b",
  },
  {
    title: "How Does The Free Demo Work?",
    desc: `You register for an new account. And Immediately you have access to the demo software to use in the browser or to download.`,
    expand: "c",
  },
  {
    title: "Do I Need Any Tutorials or Courses To Start Using The Software?",
    desc: `No tutorials or courses needed at all. The software was designed to be so intuitive to use with zero experience.`,
    expand: "d",
  },
  {
    title: "Do You Recommend Monthly Or Yearly Plan?",
    desc: `It really depends on the person. Every person has different needs. But the cheaper plan is the Yearly one`,
    expand: "e",
  },
  {
    title: "I Don't Have Enough Money To Buy The Software?",
    desc: `You can use the demo version forever free and if you really in need of the Full version, you can contact the Customer Support Team anonymously throught the "Contact" tab in the navbar or the footer of this page.`,
    expand: "f",
  },
];

const Faq = () => {
  return (
    <div
      className="accordion-style-four"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
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
  );
};

export default Faq;
