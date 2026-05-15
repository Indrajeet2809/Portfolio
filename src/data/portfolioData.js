import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiSocketdotio,
  SiVercel,
  SiRender,
} from "react-icons/si";

import aiInterview from "../assets/ai-interview.png";
import teamCollab from "../assets/team-collab.png";
import schoolmgmt from "../assets/school-management.png";

export const skills = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-slate-200" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
  { name: "Docker", icon: FaDocker, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Render", icon: SiRender, color: "text-cyan-400" },
];

export const projects = [
  {
    title: "AI Interview Prep System",
    image: aiInterview,
    description:
      "AI-powered interview preparation platform that generates interview questions, evaluates answers, tracks attempts, and provides feedback.",
    tech: ["MERN", "Gemini AI", "JWT", "MongoDB"],
    github: "https://github.com/Indrajeet2809/AI-Interview-Prep-System",
    live: "https://ai-interview-prep-system.vercel.app/",
  },
  {
    title: "Team Collaboration Platform",
    image: teamCollab,
    description:
      "Role-based task management system with organizations, teams, projects, tasks, PostgreSQL, Prisma, JWT auth, and Socket.IO notifications.",
    tech: ["React", "PostgreSQL", "Prisma", "Socket.IO"],
    github: "https://github.com/Indrajeet2809/AI-Powered-Team-Collaboration-Task-Management-",
    live: "https://ai-powered-team-collaboration-task.vercel.app/",
  },
  {
    title: "School Management Prototype",
    image: schoolmgmt,
    description:
      "Government-focused school management dashboard with Super Admin, Principal, Teacher, Student, and Parent role-based access. [*Under Development*]",
    tech: ["React", "TypeScript", "Dashboard UI"],
    github: "#",
    live: "https://avs-edu-tech.vercel.app/",
  },
  // {
  //   title: "Facial Recognition Attendance",
  //   description:
  //     "OpenCV-based attendance system that detects faces and manages attendance digitally.",
  //   tech: ["Python", "OpenCV", "Machine Learning"],
  //   github: "#",
  //   live: "#",
  // },
];