import React from "react";

const projectInfo = [
  { title: "DATE", meta: "23 July, 2020" },
  { title: "Client", meta: "Mariona Adisson, USA" },
  { title: "Project Type", meta: "3D Design, Apartment" },
  { title: "Duration", meta: "36 Days" },
];

const ProjectInfo = () => {
  return (
    <>
      {projectInfo.map((val, i) => (
        <li key={i}>
          <strong>{val.title}</strong>
          <span>{val.meta}</span>
        </li>
      ))}
    </>
  );
};

export default ProjectInfo;
