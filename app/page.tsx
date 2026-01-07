"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
  Moon,
  Sun,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navItems, socialLinks } from "@/constant/navigation";
import {
  webProjects,
  designProjects,
  experienceData,
  educationData,
  certificationData,
} from "@/constant/info";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeProjectTab, setActiveProjectTab] = useState("web");
  const [activeExperienceTab, setActiveExperienceTab] = useState("experience");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "about",
        "skills",
        "projects",
        "experience",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Transparent Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 xl:w-72 hidden lg:block">
        <div className="flex h-full flex-col px-6 py-12">
          <div className="mb-10 flex flex-col items-center">
            <div className="mb-4 relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/10 overflow-hidden">
                <img
                  src="images/profile.png"
                  alt="Jerwin Louise Peria"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground text-center">
              Jerwin Louise Peria
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              BSIT Service Management
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 gap-2 bg-transparent"
              asChild
            >
              <a
                href="/Jerwin_Peria_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-3.5 w-3.5" />
                View Resume
              </a>
            </Button>
          </div>

          <nav className="flex-1 flex flex-col items-center space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-3 px-3 py-2.5 text-sm transition-all relative w-40 text-left ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-primary rounded-full" />
                  )}
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-primary" : ""}`}
                  />
                  <span
                    className={
                      isActive
                        ? "underline underline-offset-4 decoration-primary decoration-2"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="flex justify-center mb-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © 2025 John Doe
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border lg:hidden">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-bold">Jerwin Louise G. Peria</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:ml-72">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 mt-16 lg:mt-0 mx-auto">
          {/* Overview Section */}
          <section
            id="overview"
            className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
          >
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
                Hi, I'm Jerwin
              </h2>
              <p className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground text-balance max-w-4xl">
                A passionate full-stack developer crafting beautiful, functional
                web experiences
              </p>
            </div>
          </section>

          {/* About Me Section */}
          <section
            id="about"
            className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
              About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <img
                  src="images/Jerwin-Pogi.jpg"
                  alt="Profile picture"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Right Column - Text */}
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="pt-6 lg:p-8">
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4">
                      I’m an Information Technology Service Management (ITSM)
                      major with hands-on experience in web and software
                      development, system testing, and basic IT support. Through
                      my academic projects and practical work, I have developed
                      a solid understanding of how technology solutions are
                      designed, built, tested, and maintained to meet user and
                      business requirements. My background allows me to work
                      comfortably across both technical and service-oriented
                      tasks, ensuring systems function reliably while aligning
                      with organizational goals.
                    </p>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                      I am particularly interested in applying my technical and
                      service management skills to support IT projects that
                      enhance operational efficiency, system reliability, and
                      overall user experience. I value structured processes,
                      continuous improvement, and user-focused solutions, and I
                      am motivated to contribute to teams that prioritize
                      quality, collaboration, and effective service delivery. By
                      combining technical knowledge with ITSM principles, I aim
                      to help organizations deliver dependable IT services that
                      create real value for users and stakeholders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
              Skills
            </h3>
            <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
              <Card>
                <CardHeader className="lg:p-6">
                  <CardTitle className="lg:text-xl">Frontend</CardTitle>
                  <CardDescription className="lg:text-base">
                    Building interactive user interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:px-6 lg:pb-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="lg:p-6">
                  <CardTitle className="lg:text-xl">Backend</CardTitle>
                  <CardDescription className="lg:text-base">
                    Server-side development & APIs
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:px-6 lg:pb-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="lg:p-6">
                  <CardTitle className="lg:text-xl">
                    Tools & Platforms
                  </CardTitle>
                  <CardDescription className="lg:text-base">
                    Development workflow & deployment
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:px-6 lg:pb-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="lg:p-6">
                  <CardTitle className="lg:text-xl">Design</CardTitle>
                  <CardDescription className="lg:text-base">
                    UI/UX & design systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="lg:px-6 lg:pb-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Design Systems</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                    <Badge variant="secondary">Accessibility</Badge>
                    <Badge variant="secondary">Animation</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
              Projects
            </h3>

            <div className="flex gap-2 mb-6 lg:mb-8 border-b border-border">
              <button
                onClick={() => setActiveProjectTab("web")}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeProjectTab === "web"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Web Development Projects
                {activeProjectTab === "web" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveProjectTab("design")}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeProjectTab === "design"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UI/UX and Figma Designs
                {activeProjectTab === "design" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
              {(activeProjectTab === "web" ? webProjects : designProjects).map(
                (project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="lg:p-6">
                      <CardTitle className="group-hover:text-primary transition-colors lg:text-xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="lg:text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="lg:px-6 lg:pb-6">
                      <p className="text-sm lg:text-base text-muted-foreground mb-4">
                        {project.details}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 lg:text-sm"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Open
                          </a>
                        </Button>
                        {project.repoUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent lg:text-sm"
                            asChild
                          >
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="gap-2"
                            >
                              <Github className="h-3.5 w-3.5" />
                              View Repository
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="mb-24 lg:mb-32 scroll-mt-24 min-h-[600px]"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
              Experience
            </h3>

            <div className="flex gap-2 mb-6 lg:mb-8 border-b border-border">
              <button
                onClick={() => setActiveExperienceTab("experience")}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeExperienceTab === "experience"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Experience
                {activeExperienceTab === "experience" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveExperienceTab("education")}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeExperienceTab === "education"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
                {activeExperienceTab === "education" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveExperienceTab("certification")}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeExperienceTab === "certification"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Certification
                {activeExperienceTab === "certification" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {(activeExperienceTab === "experience"
                ? experienceData
                : activeExperienceTab === "education"
                ? educationData
                : certificationData
              ).map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="lg:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <CardTitle className="lg:text-xl">{item.title}</CardTitle>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <CardDescription className="lg:text-base">
                      {item.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="lg:px-6 lg:pb-6">
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border lg:hidden">
        <div className="container flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
