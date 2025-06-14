import { createContext, useContext, useRef, useState } from "react";

// Check that your context includes all needed state variables
export const ResumeContext = createContext({
  about: {},
  setAbout: () => {},
  educationList: [],
  setEducationList: () => {},
  skills: [],
  setSkills: () => {},
  workList: [],
  setWorkList: () => {},
  projects: [],
  setProjects: () => {},
  Certificates: [],
  setCertificates: () => {},
  AchievementList: [],
  setAchievementList: () => {},
  theme: "",
  setTheme: () => {},
  template: "",
  setTemplate: () => {},
  visibleSections: {},
  setVisibleSections: () => {},
});

export const ResumeProvider = ({ children }) => {
  const printElem = useRef();

  const [about, setAbout] = useState({});
  const [educationList, setEducationList] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workList, setWorkList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [Certificates, setCertificates] = useState([]);
  const [AchievementList, setAchievementList] = useState([]);
  const [theme, setTheme] = useState("#10c4ec");
  const [template, setTemplate] = useState("divider");
  const [visibleSections, setVisibleSections] = useState({
    education: true,
    skills: true,
    work: true,
    projects: true,
    certificates: true,
    achievements: true,
  }); // Add section visibility state

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
    setTemplate,
    visibleSections,
    setVisibleSections, // Add section visibility to context
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
