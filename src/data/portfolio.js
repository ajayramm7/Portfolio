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
  name: "Ajayram",
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
    items: ['C', 'C++', 'JavaScript']
  },
  {
    category: 'Frontend',
    icon: Terminal,
    items: ['React.js', 'Tailwind CSS', 'Responsive UI', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication']
  },
  {
    category: 'Database & Tools',
    icon: Database,
    items: ['MongoDB', 'Git', 'GitHub', 'Deployment']
  }
];

export const projects = [
  {
    title: 'Doctor Appointment & Consultation System',
    description:
      'A healthcare platform for booking appointments, video consultations, doctor dashboards, and downloadable PDF prescriptions.',
    tech: ['Node.js', 'Express', 'MongoDB', 'WebRTC', 'PDFKit'],
    github: 'https://github.com/ajayramm7/doctor-appointment-system',
    live: 'https://doctor-appointment-demo.vercel.app',
    icon: Network
  },
  {
    title: 'Mentor-Mentee Management System',
    description:
      'A role-based academic mentoring app for assigning mentors, tracking meetings, sharing notes, and monitoring student progress.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ajayramm7/mentor-mentee-system',
    live: 'https://mentor-mentee-demo.vercel.app',
    icon: Users
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizations for sorting and pathfinding algorithms with step controls, speed settings, and clean learning states.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/ajayramm7/algorithm-visualizer',
    live: 'https://algorithm-visualizer-demo.vercel.app',
    icon: BrainCircuit
  }
];

export const achievements = [
  {
    title: 'B.Tech CSE Student, NIT Delhi',
    period: '2023 - Present',
    description:
      'Pursuing Computer Science Engineering while building academic and personal full-stack projects using React, Node.js, Express, MongoDB, and Git-based workflows.',
    icon: BookOpen
  },
  {
    title: 'Continuous Learning',
    period: 'Ongoing',
    description:
      'Actively strengthening data structures, system design basics, backend architecture, and production-ready frontend development.',
    icon: Award
  }
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];
