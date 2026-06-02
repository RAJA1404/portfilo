export interface Project {
  title: string;
  description: string;
  type: string;
  technologies: string[];
  githubUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: string;
}

export const profile = {
  name: "RAJA K C",
  title: "AI & Data Science Student / Full Stack Developer",
  summary:
    "B.Tech Artificial Intelligence and Data Science student building full-stack products, AI systems, and practical developer tools with a focus on clean user experience and reliable engineering.",
  email: "rajarx006@gmail.com",
  phone: "+91 9842559142",
  location: "Tamil Nadu, India",
  githubUrl: "https://github.com/RAJA1404",
  linkedinUrl: "https://www.linkedin.com/in/raja-k-c-991b7a294/",
  resumeUrl: "/RAJA_KC_Updated.docx (1).pdf",
};

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Nandha Engineering College",
  location: "Tamil Nadu",
  cgpa: "7.3/10",
  graduation: "September 2027",
};

export const focusAreas = [
  "Full Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "REST APIs",
  "React.js",
  "Node.js",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "Machine Learning", "Deep Learning", "NLP"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Tableau"],
  },
];

export const projects: Project[] = [
  {
    title: "RightToKnow - RTI Management System",
    type: "Full Stack",
    description:
      "A complete web platform that enables citizens to file RTI requests, track progress, and communicate with government departments.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS S3",
      "Twilio",
      "Nodemailer",
    ],
    githubUrl: "https://github.com/RAJA1404/RightToKnow",
    highlights: [
      "Citizen Dashboard",
      "Department Dashboard",
      "HOD Dashboard",
      "Main Admin Dashboard",
      "JWT Authentication",
      "Role Based Access Control",
      "Real Time Tracking",
      "AI Assisted RTI Query Builder",
      "Email Notifications",
      "SMS Notifications",
      "Cloud Storage",
    ],
  },
  {
    title: "AI Sign Language Recognition",
    type: "AI / Computer Vision",
    description:
      "Real-time sign language translation system converting gestures into text.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    highlights: [
      "Captured and processed live gesture input with OpenCV.",
      "Used deep learning techniques to classify sign language gestures.",
      "Converted recognized gestures into readable text output.",
    ],
  },
  {
    title: "IoT Smart Automation Physiotherapy Instrument",
    type: "IoT / Embedded Systems",
    description:
      "Automated rehabilitation system for physiotherapy exercises.",
    technologies: ["ESP32", "Sensors", "IoT"],
    highlights: [
      "Used sensors to capture joint movement and exercise force data.",
      "Integrated ESP32 for real-time monitoring and device control.",
      "Designed a motor-assisted mechanism to support rehabilitation exercises.",
    ],
  },
  {
    title: "Car Parking Management System",
    type: "Java Application",
    description:
      "Vehicle parking management and slot allocation system.",
    technologies: ["Java", "OOP", "File Handling"],
    highlights: [
      "Applied object-oriented programming principles to organize parking workflows.",
      "Used file handling to store and manage parking records.",
      "Tracked parking availability and vehicle entries in real time.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Trios Technologies",
    role: "Deep Learning Intern",
    period: "June 2025 - July 2025",
    description:
      "Worked on deep learning workflows with practical model development, preprocessing, and training tasks.",
    technologies: [
      "TensorFlow",
      "Deep Learning",
      "Data Preprocessing",
      "Model Training",
    ],
  },
  {
    company: "F5Coders",
    role: "AIML Intern",
    period: "December 2025 - January 2026",
    description:
      "Built machine learning foundations through data analysis, model development, and predictive modeling practice.",
    technologies: ["NumPy", "Pandas", "Scikit-Learn", "Predictive Modeling"],
  },
];

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence and Data Science",
    issuer: "Academic Specialization",
    status: "In progress",
  },
  {
    title: "Full Stack Development Practice",
    issuer: "Project-based learning",
    status: "Portfolio verified",
  },
  {
    title: "Machine Learning and Computer Vision",
    issuer: "Hands-on implementation",
    status: "Project verified",
  },
];
