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
  description: string;
  technologies: string[];
}

export const profile = {
  name: "RAJA K C",
  title: "AI & Data Science Student / Full Stack Developer",
  email: "rajarx006@gmail.com",
  phone: "+91 9842559142",
  location: "India",
  githubUrl: "https://github.com/RAJA1404",
  linkedinUrl: "https://www.linkedin.com/in/raja-k-c-991b7a294/",
  resumeUrl: "/RAJA_KC_Updated.docx (1).pdf",
};

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Nandha Engineering College",
  cgpa: "7.3/10",
  graduation: "September 2027",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: [
      "Java",
      "OOPs",
      "Collections",
      "Exception Handling",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "REST APIs",
      "Node.js",
      "Express.js",
      "Postman",
      "MongoDB",
      "JWT",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "AWS S3"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Regression",
      "Classification",
      "Deep Learning",
      "NLP",
      "Sentiment Analysis",
      "TensorFlow",
      "OpenCV",
      "Computer Vision",
      "Harris Corner Detection",
      "SIFT Feature Detection",
      "Multi-scale Image Blending",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "RightToKnow - RTI Management System",
    type: "Full Stack",
    description:
      "A full-stack RTI management platform that helps users create, submit, and track Right to Information requests.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS S3",
    ],
    githubUrl: "https://github.com/RAJA1404/RightToKnow",
    highlights: [
      "Implemented JWT authentication for secure user access.",
      "Added English and Tamil multi-language support.",
      "Integrated AWS S3 storage for uploaded documents.",
      "Built an AI-assisted smart RTI query builder and request tracking flow.",
    ],
  },
  {
    title: "AI-Based Sign Language Recognition System",
    type: "AI / Computer Vision",
    description:
      "A real-time deep learning system that translates sign language gestures into text.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    highlights: [
      "Captured and processed live gesture input with OpenCV.",
      "Used deep learning techniques to classify sign language gestures.",
      "Converted recognized gestures into readable text output.",
    ],
  },
  {
    title: "IoT-Based Smart Automation Physiotherapy Instrument",
    type: "IoT / Embedded Systems",
    description:
      "A smart rehabilitation instrument for tracking joint physiotherapy exercises in real time.",
    technologies: ["ESP32", "Flex Sensors", "Force Sensors", "Motor Mechanism"],
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
      "A Java-based parking management system for maintaining real-time parking records.",
    technologies: ["Java", "OOPs", "File Handling"],
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
    role: "Intern",
    description:
      "Worked on practical software development tasks and strengthened full-stack development fundamentals.",
    technologies: ["Web Development", "JavaScript", "Team Collaboration"],
  },
  {
    company: "F5Coders",
    role: "Intern",
    description:
      "Contributed to development workflows while building hands-on experience with modern web technologies.",
    technologies: ["Frontend Development", "Backend APIs", "GitHub"],
  },
];
