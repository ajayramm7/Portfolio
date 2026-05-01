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
  title: "Engineering Student & Full-Stack Developer",
  intro:
    "I build practical, responsive web applications with clean interfaces, reliable backends, and a strong focus on real user workflows.",
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
  { label: 'Focus', value: 'Full-Stack' }
];

export const aboutCards = [
  {
    title: 'Engineering Foundation',
    description:
      'Strong interest in data structures, algorithms, operating systems, databases, and software engineering fundamentals.',
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
    title: 'Academic Project Builder',
    period: '2024 - Present',
    description:
      'Designed and implemented full-stack college projects using React, Node.js, Express, MongoDB, and Git-based workflows.',
    icon: BookOpen
  },
  {
    title: 'Open Achievement Slot',
    period: 'Add latest award',
    description:
      'Use this placeholder for hackathons, internships, certifications, coding contests, technical talks, or campus leadership.',
    icon: Award
  }
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];
