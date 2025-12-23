// app/page.tsx
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="page gap-[100px]">
      <section id="overview">
        <h1>Hi, I'm Jerwin</h1>
        <p>
          BSIT student specializing in Service Management, aspiring Web
          Developer.
        </p>
      </section>

      <Separator />

      <section id="about">
        <h2>About Me</h2>
        <p>
          {" "}
          I'm a 3rd Year College student pursuing a Bachelor of Science in
          Information Technology with a major in Service Management. My passion
          lies in creating efficient, user-friendly web applications that solve
          real-world problems.
        </p>
        <p>
          With a strong foundation in both frontend and backend technologies, I
          enjoy building complete solutions that deliver exceptional user
          experiences while maintaining robust functionality.
        </p>
      </section>

      <Separator />

      <section id="skills">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, PHP, SQL, Next.js</p>
      </section>

      <Separator />

      <section id="projects">
        <h2>Projects</h2>
        <p>Inventory Systems, Dashboard Apps, Web Platforms</p>
      </section>

      <Separator />

      <section id="experience">
        <h2>Experience</h2>
        <p>OJT, Academic Projects, System Design</p>
      </section>

      {/* <section id="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section> */}
    </div>
  );
}
