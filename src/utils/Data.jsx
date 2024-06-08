import { toBeChecked } from "@testing-library/jest-dom/matchers";
import frontend from "../assets/frontend-icon.png";
import backend from "../assets/backend-icon.png";
import tools from "../assets/tools-icon.png";
import softSkills from "../assets/soft-skills-icon.png";


export const SKILLS = [
  {
    title: "Backend",
    icon: { backend},
    skills: [
      { skill: "Java", percentage: "70%" },
      { skill: "Spring Boot", percentage: "65%" },
      { skill: "NodeJS", percentage: "65%" },
      { skill: "Maven", percentage: "60%" },
      { skill: "MySQL", percentage: "60%" },
      { skill: "MongoDB", percentage: "60%" },
    ],
  },
  {
    title: "Frontend",
    icon: {frontend},
    skills: [
      { skill: "HTML5", percentage: "70%" },
      { skill: "CSS3", percentage: "60%" }
    ],
  },
  {
    title: tools,
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Github Action", percentage: "70%" },
      { skill: "InteliJ", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: {softSkills},
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];