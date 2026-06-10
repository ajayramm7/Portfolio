import {
  Award,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  Server,
  Terminal,
  Users
} from 'lucide-react';

export const profile = {
  name: "Ajayram Meena",
  title: "B.Tech CSE Student at NIT Delhi & Full-Stack Developer",
  intro:
    "I am a B.Tech Computer Science Engineering student at NIT Delhi who designs and builds responsive full-stack applications with clean interfaces, reliable APIs, and user-focused product thinking.",
  email: "ajayramm7@gmail.com",
  location: "India",
  resume: "/resume.pdf",
  github: "https://github.com/ajayramm7",
  linkedin: "https://www.linkedin.com/in/ajayrammeena/",
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const highlights = [
  { label: 'Projects Built', value: '03+' },
  { label: 'Core Stack', value: 'MERN' },
  { label: 'Focus', value: 'Product UI' }
];

export const aboutCards = [
  {
    title: 'CSE Foundation',
    description:
      'Pursuing B.Tech in Computer Science Engineering at NIT Delhi since 2023, with a strong interest in data structures, algorithms, operating systems, databases, and software engineering fundamentals.',
    icon: GraduationCap
  },
  {
    title: 'Product Thinking',
    description:
      'I enjoy translating messy requirements into usable flows, simple interfaces, and maintainable project architecture.',
    icon: BrainCircuit
  },
  {
    title: 'Collaboration',
    description:
      'Comfortable using Git, writing readable code, documenting decisions, and building projects with team-friendly structure.',
    icon: Users
  }
];

export const skills = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Python', 'JavaScript']
  },
  {
    category: 'Frontend',
    icon: Terminal,
    items: ['React.js', 'Tailwind CSS', 'Responsive UI', 'Framer Motion']
  },
  {
    category: 'Backend & ML',
    icon: Server,
    items: ['Node.js', 'Express', 'Flask', 'Scikit-Learn']
  },
  {
    category: 'Database & Tools',
    icon: Database,
    items: ['MongoDB', 'WebRTC', 'Git', 'GitHub']
  }
];

export const projects = [
  {
    title: 'FakeBuster (Fake News & Spam Detection Platform)',
    description:
      'Architected a full-stack platform using React, Node.js, and MongoDB, communicating with a Python ML microservice using Scikit-Learn to provide real-time fake news and spam classification with predictive risk scores.',
    tech: ['MERN Stack', 'Python', 'Scikit-Learn', 'Flask'],
    github: 'https://github.com/ajayramm7/fakebuster-detection-platform',
    live: '',
    icon: BrainCircuit
  },
  {
    title: 'SafeTrack (Digital Incident & Near-Miss Reporting System)',
    description:
      'Developed a full-stack safety reporting platform with role-based access control (RBAC), JWT authentication, Multer for evidence uploads, and dynamic dashboard analytics utilizing Chart.js.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    github: 'https://github.com/ajayramm7/safetrack-incident-reporting-system',
    live: '',
    icon: Database
  },
  {
    title: 'Doctor Sahab (Healthcare Consultation System)',
    description:
      'Developed a full-stack healthcare platform with secure authentication, real-time video consultation using WebRTC, appointment scheduling, and automated prescription generation.',
    tech: ['Node.js', 'Express.js', 'WebRTC', 'MongoDB'],
    github: 'https://github.com/ajayramm7/doctor-sahab-healthcare-system',
    live: '',
    icon: Users
  }
];

export const achievements = [
  {
    title: 'Strong Foundation in CS',
    period: '2023 - Present',
    description:
      'Strong foundation in Data Structures and Algorithms with consistent problem-solving practice and coursework in OOP, DBMS, OS, and Computer Networks.',
    icon: BookOpen
  },
  {
    title: 'Project Development',
    period: 'Ongoing',
    description:
      'Built multiple real-world full-stack and Machine Learning projects demonstrating a strong ability to translate requirements into usable interfaces and reliable APIs.',
    icon: Award
  }
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];
