import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

export const navItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: GraduationCap },
];

export const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];
