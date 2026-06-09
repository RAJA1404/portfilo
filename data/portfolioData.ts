export interface Project {
  title: string;
  tagline: string;
  description: string;
  type: string;
  technologies: string[];
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  status?: string;
  role?: string;
  problem?: string;
  solution?: string;
  highlights: string[];
  caseStudy: ProjectCaseStudy;
}

export interface ProjectCaseStudy {
  overview: string;
  architecture: string[];
  coreFeatures: string[];
  contributions: string[];
  challenges: string[];
  learnings: string[];
  futureScope: string[];
  metrics: string[];
  screenshots: ProjectScreenshot[];
}

export interface ProjectScreenshot {
  title: string;
  src: string;
  alt: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  usedIn: string;
}

export interface Skill {
  name: string;
  logo: string;
  usedIn: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface LearningJourney {
  title: string;
  issuer: string;
  status: string;
}

export const profile = {
  name: "RAJA K C",
  title: "AI & Data Science Student / Full Stack Developer & IoT Innovator",
  summary:
    "B.Tech Artificial Intelligence and Data Science student building full-stack MERN products, AI-assisted workflows, and practical software systems with a focus on clean interfaces, reliable APIs, and recruiter-ready execution.",
  email: "rajarx006@gmail.com",
  phone: "+91 9842559142",
  location: "Tamil Nadu, India",
  githubUrl: "https://github.com/RAJA1404",
  linkedinUrl: "https://www.linkedin.com/in/raja-k-c-991b7a294/",
  resumeUrl: "/raja_resume.pdf",
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
  "MERN Stack Applications",
  "Artificial Intelligence",
  "AI Solutions",
  "IoT Systems",
  "REST APIs",
  "Real-world Problem Solving",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      {
        name: "Java",
        logo: "JV",
        usedIn: ["Car Parking Management System"],
      },
      {
        name: "Python",
        logo: "PY",
        usedIn: ["AI Sign Language Recognition", "AIML internship work"],
      },
      {
        name: "JavaScript",
        logo: "JS",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
    ],
    usedIn:
      "Applied across Java file-handling systems, AI prototypes, and full-stack web projects.",
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        logo: "RE",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
      {
        name: "Next.js",
        logo: "NX",
        usedIn: ["Personal Portfolio"],
      },
      {
        name: "HTML",
        logo: "H5",
        usedIn: ["Portfolio interfaces", "Dashboard screens"],
      },
      {
        name: "CSS",
        logo: "CSS",
        usedIn: ["Responsive layouts", "Dashboard styling"],
      },
      {
        name: "Tailwind CSS",
        logo: "TW",
        usedIn: ["RightToKnow", "Personal Portfolio"],
      },
    ],
    usedIn:
      "Used to build responsive dashboards, portfolio interfaces, and the RightToKnow citizen-facing experience.",
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "ND",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
      {
        name: "Express.js",
        logo: "EX",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
      {
        name: "REST APIs",
        logo: "API",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
    ],
    usedIn:
      "Used for authentication, dashboard APIs, request workflows, and MERN application modules.",
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        logo: "DB",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
    ],
    usedIn:
      "Used for storing users, requests, records, project data, and role-based application state.",
  },
  {
    title: "AI & ML",
    skills: [
      {
        name: "TensorFlow",
        logo: "TF",
        usedIn: ["AI Sign Language Recognition", "Deep Learning internship"],
      },
      {
        name: "Machine Learning",
        logo: "ML",
        usedIn: ["AIML internship work", "Predictive modeling practice"],
      },
      {
        name: "Deep Learning",
        logo: "DL",
        usedIn: ["AI Sign Language Recognition", "Trios Technologies"],
      },
      {
        name: "NLP",
        logo: "NLP",
        usedIn: ["RightToKnow AI query builder"],
      },
    ],
    usedIn:
      "Used in sign language recognition, predictive modeling practice, and AI-assisted RTI query building.",
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: "GT",
        usedIn: ["RightToKnow", "College LMS Portal"],
      },
      {
        name: "GitHub",
        logo: "GH",
        usedIn: ["Project version control", "Portfolio repositories"],
      },
      {
        name: "Postman",
        logo: "PM",
        usedIn: ["REST API testing", "Backend validation"],
      },
      {
        name: "Tableau",
        logo: "TB",
        usedIn: ["Data exploration", "Analytics practice"],
      },
      {
        name: "ESP32",
        logo: "32",
        usedIn: ["Physiotherapy Instrument"],
      },
    ],
    usedIn:
      "Used for API testing, source control, collaboration, data exploration, IoT prototyping, and project delivery.",
  },
];

export const projects: Project[] = [
  {
    title: "RightToKnow - RTI Management System",
    tagline: "Smart RTI Filing & Tracking Platform",
    type: "Full Stack",
    status: "Flagship Project",
    role: "Full Stack Developer",
    problem:
      "Citizens often struggle to identify the correct government department, write legally structured RTI requests, and track application progress after submission.",
    solution:
      "Developed a Smart RTI Filing & Tracking Platform that guides users through RTI creation, suggests relevant departments, generates structured RTI drafts, verifies contact information through OTP, and enables end-to-end application tracking.",
    description:
      "A smart RTI filing and tracking platform that helps citizens create structured requests, identify departments, verify submissions, and monitor progress across role-based dashboards.",
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
    imageUrl: "/project-righttoknow-dashboard.svg",
    imageAlt: "RightToKnow RTI dashboard preview",
    highlights: [
      "AI-assisted department recommendation",
      "OTP-verified citizen submissions",
      "Multilingual support in English and Tamil",
      "Public Authority Directory",
      "Real-time application tracking",
      "Role-based access management",
    ],
    caseStudy: {
      overview:
        "RightToKnow is a smart RTI filing and tracking platform designed to help citizens create legally structured requests, identify the right public authority, verify submissions, and follow application progress from a single dashboard.",
      architecture: [
        "React.js and Tailwind CSS power citizen, department, HOD, and admin dashboards.",
        "Node.js and Express.js expose REST APIs for authentication, RTI creation, tracking, and role workflows.",
        "MongoDB stores citizen profiles, RTI records, public authority data, and workflow status.",
        "JWT-based authentication and role-based access control separate citizen, department, HOD, and admin permissions.",
        "AWS S3 handles document storage while Twilio and Nodemailer support OTP and notification flows.",
      ],
      coreFeatures: [
        "Smart Department Matching",
        "OTP Verification",
        "Public Authority Directory",
        "Multilingual Support in English and Tamil",
        "Application Tracking",
        "AI Assisted RTI Draft Generation",
        "Role-based Dashboards",
      ],
      contributions: [
        "Built the full-stack project structure across frontend, backend, database, and service integrations.",
        "Implemented role-aware dashboard flows for citizens, departments, HOD users, and main admins.",
        "Designed RTI submission, tracking, authentication, and notification workflows.",
        "Integrated AI-assisted query building concepts to help citizens create structured RTI drafts.",
      ],
      challenges: [
        "Mapping citizen requests to the correct public authority without making the form experience confusing.",
        "Keeping role-based access predictable across multiple dashboards and user types.",
        "Balancing rich RTI guidance with a simple submission flow for first-time users.",
      ],
      learnings: [
        "Designed a civic-tech workflow around real citizen pain points instead of only CRUD screens.",
        "Strengthened MERN architecture planning for multi-role systems.",
        "Improved understanding of authentication, dashboard state, file storage, and notification integration.",
      ],
      futureScope: [
        "Improve department recommendation accuracy with a larger public authority dataset.",
        "Add analytics for request volume, department response trends, and pending cases.",
        "Expand multilingual support and introduce richer draft review assistance.",
      ],
      metrics: [
        "4 role-based dashboards",
        "6 core impact features",
        "English and Tamil support",
        "OTP-verified submission flow",
      ],
      screenshots: [
        {
          title: "RTI Dashboard",
          src: "/project-righttoknow-dashboard.svg",
          alt: "RightToKnow dashboard case study screenshot",
        },
      ],
    },
  },
  {
    title: "College LMS Portal",
    tagline: "MERN Learning Management System",
    type: "MERN Stack",
    badge: "ADMIN MODULE TEAM LEADER",
    status: "Ongoing MERN Project",
    role: "Admin Module Team Leader",
    problem:
      "College learning workflows need a centralized system for administration, user management, academic content, and module-level coordination.",
    solution:
      "Leading the admin module for a MERN-based LMS portal with structured admin workflows, role-aware controls, and scalable module planning.",
    description:
      "A team-built MERN learning management portal focused on organizing college academic workflows, admin controls, and user modules.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    imageUrl: "/project-lms-admin-dashboard.svg",
    imageAlt: "College LMS admin dashboard preview",
    highlights: [
      "Leading the Admin Module team and coordinating module-level delivery.",
      "Designing admin dashboard workflows for user, course, and access management.",
      "Planning role-based access flows with clear admin responsibilities.",
      "Aligning backend APIs and frontend screens with the MERN project structure.",
    ],
    caseStudy: {
      overview:
        "College LMS Portal is an ongoing MERN application for organizing academic workflows, with Raja leading the Admin Module team and shaping admin-side user, course, and access management flows.",
      architecture: [
        "React.js frontend for admin dashboards and module screens.",
        "Node.js and Express.js backend for user management, access workflows, and REST APIs.",
        "MongoDB database for users, roles, academic records, and module data.",
        "Role-based access design to separate admin responsibilities from other LMS users.",
      ],
      coreFeatures: [
        "User Management",
        "Role-Based Access Control",
        "Admin Dashboard Workflows",
        "MERN Architecture",
        "Module-level Team Coordination",
      ],
      contributions: [
        "Serving as Admin Module Team Leader for the ongoing MERN project.",
        "Planning admin workflows for user, course, and access management.",
        "Coordinating responsibilities with teammates and aligning module boundaries.",
        "Helping connect frontend screens with backend API expectations.",
      ],
      challenges: [
        "Keeping admin responsibilities clear while the project evolves across multiple team modules.",
        "Designing role-based flows that can scale as more LMS features are added.",
        "Maintaining coordination between frontend, backend, and database responsibilities.",
      ],
      learnings: [
        "Improved team leadership through module planning and coordination.",
        "Practiced turning academic workflow requirements into MERN application structure.",
        "Strengthened understanding of admin dashboards and access control design.",
      ],
      futureScope: [
        "Complete admin module workflows for users, courses, and permissions.",
        "Add reporting and activity monitoring for administrators.",
        "Improve reusable module patterns for future LMS expansion.",
      ],
      metrics: [
        "Admin Module leadership",
        "MERN architecture",
        "Role-based access planning",
        "Team-based delivery",
      ],
      screenshots: [
        {
          title: "Admin Dashboard",
          src: "/project-lms-admin-dashboard.svg",
          alt: "College LMS admin dashboard case study screenshot",
        },
      ],
    },
  },
  {
    title: "IoT Smart Automation Physiotherapy Instrument",
    tagline: "Sensor-assisted Rehabilitation Prototype",
    type: "IoT / Embedded Systems",
    status: "Featured Project",
    role: "IoT System Developer",
    problem:
      "Physiotherapy exercises need measurable feedback so rehabilitation progress can be monitored more consistently.",
    solution:
      "Designed an automated sensor-based instrument to capture exercise movement and support real-time rehabilitation tracking.",
    description:
      "Automated rehabilitation system for physiotherapy exercises.",
    technologies: ["ESP32", "Sensors", "IoT"],
    imageUrl: "/project-physiotherapy-prototype.svg",
    imageAlt: "IoT physiotherapy prototype preview",
    highlights: [
      "Used sensors to capture joint movement and exercise force data.",
      "Integrated ESP32 for real-time monitoring and device control.",
      "Designed a motor-assisted mechanism to support rehabilitation exercises.",
    ],
    caseStudy: {
      overview:
        "The Physiotherapy Instrument is an IoT-based healthcare prototype built to support rehabilitation exercises through sensor feedback, ESP32-based monitoring, and motor-assisted movement support.",
      architecture: [
        "ESP32 acts as the central controller for sensor input and device control.",
        "Flex and force sensors capture rehabilitation movement and exercise feedback.",
        "A motor-assisted mechanism supports controlled physiotherapy movement.",
        "Sensor readings enable real-time monitoring for exercise progress.",
      ],
      coreFeatures: [
        "IoT Architecture",
        "ESP32 Controller",
        "Flex and Force Sensor Feedback",
        "Healthcare Rehabilitation Use Case",
        "Motor-assisted Exercise Support",
      ],
      contributions: [
        "Designed the prototype concept around measurable physiotherapy feedback.",
        "Integrated ESP32, sensors, and motor mechanism into the rehabilitation workflow.",
        "Mapped sensor feedback to practical exercise tracking needs.",
      ],
      challenges: [
        "Capturing meaningful physical movement data from low-cost sensors.",
        "Balancing device automation with safe rehabilitation movement.",
        "Designing a prototype that explains both hardware and healthcare value clearly.",
      ],
      learnings: [
        "Learned how embedded systems can solve practical healthcare monitoring problems.",
        "Improved understanding of sensor-based feedback and real-time device behavior.",
        "Practiced communicating hardware architecture in a recruiter-friendly way.",
      ],
      futureScope: [
        "Add a dashboard for tracking patient exercise progress over time.",
        "Improve calibration for different users and exercise ranges.",
        "Explore wireless reporting for physiotherapist review.",
      ],
      metrics: [
        "ESP32-based prototype",
        "Flex and force sensor inputs",
        "Motor-assisted mechanism",
        "Healthcare use case",
      ],
      screenshots: [
        {
          title: "Prototype Architecture",
          src: "/project-physiotherapy-prototype.svg",
          alt: "IoT physiotherapy prototype case study screenshot",
        },
      ],
    },
  },
];

export const experiences: Experience[] = [
  {
    company: "Trios Technologies",
    role: "Deep Learning Intern",
    period: "June 2025 - July 2025",
    description:
      "Built hands-on deep learning workflows by preparing datasets, training TensorFlow models, and improving model development discipline through iterative experimentation.",
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
      "Developed machine learning practice through data analysis, feature preparation, Scikit-Learn modeling, and predictive modeling workflows using Python data libraries.",
    technologies: ["NumPy", "Pandas", "Scikit-Learn", "Predictive Modeling"],
  },
];

export const learningJourney: LearningJourney[] = [
  {
    title: "Artificial Intelligence and Data Science",
    issuer: "Academic Specialization",
    status: "Degree track",
  },
  {
    title: "Full Stack Development Practice",
    issuer: "Project-based learning",
    status: "Applied through projects",
  },
  {
    title: "Machine Learning and Computer Vision",
    issuer: "Hands-on implementation",
    status: "Built with prototypes",
  },
];
