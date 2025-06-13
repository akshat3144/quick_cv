import { createContext, useContext, useRef, useState } from "react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const printElem = useRef();

  const [theme, setTheme] = useState("#10c4ec");
  const [template, setTemplate] = useState("divider"); // Add template state

  const [about, setAbout] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    picture: "",
  });

  const [educationList, setEducationList] = useState([
    {
      id: "",
      degree: "",
      school: "",
      startYr: 0,
      endYr: 0,
      grade: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "ReactJS",
    },
    {
      id: 3,
      name: "NodeJS",
    },
    {
      id: 4,
      name: "MongoDB",
    },
    {
      id: 5,
      name: "ExpressJS",
    },
    {
      id: 6,
      name: "PHP",
    },
    {
      id: 7,
      name: ".Net",
    },
    {
      id: 8,
      name: "Java",
    },
    {
      id: 9,
      name: "RestAPI",
    },
    {
      id: 10,
      name: "jQuery",
    },
    {
      id: 11,
      name: "MySQL",
    },
    {
      id: 12,
      name: "Ajax",
    },
    {
      id: 13,
      name: "GitHub",
    },
    {
      id: 14,
      name: "HTML",
    },
    {
      id: 15,
      name: "CSS",
    },
    {
      id: 16,
      name: "TailwindCSS",
    },
    {
      id: 17,
      name: "Bootstrap",
    },
  ]);

  const [workList, setWorkList] = useState([
    {
      id: "",
      position: "",
      company: "",
      type: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "",
      name: "",
      description: "",
      url: "",
    },
  ]);

  const [Certificates, setCertificates] = useState([
    {
      id: "",
      name: "",
      description: "",
      url: "",
    },
  ]);

  const [AchievementList, setAchievementList] = useState([
    {
      id: "",
      degree: "",
      school: "",
    },
  ]);

  const value = {
    about,
    setAbout,
    educationList,
    setEducationList,
    skills,
    setSkills,
    workList,
    setWorkList,
    projects,
    setProjects,
    Certificates,
    setCertificates,
    AchievementList,
    setAchievementList,
    printElem,
    theme,
    setTheme,
    template,
    setTemplate, // Add template to context value
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
