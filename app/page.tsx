import { ArrowUpRight, Binary, CircuitBoard, Code2, Cpu, Download, Layers3, Wrench } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LeadershipSection } from "@/components/leadership-section";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { profile, skillGroups } from "@/data/portfolio";

const skillIcons = [Code2, CircuitBoard, Cpu, Binary, Wrench, Layers3];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />

        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="shell about-layout">
            <Reveal>
              <SectionHeading eyebrow="Profile" title="Engineer across the stack" />
            </Reveal>
            <Reveal className="about-copy" delay={0.08}>
              <p>{profile.shortBio}</p>
              <div className="focus-line">
                <span>Hardware</span><i aria-hidden="true" /><span>Firmware</span><i aria-hidden="true" /><span>Software</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="shell">
            <Reveal>
              <SectionHeading
                eyebrow="Technical toolkit"
                title="Skills organized by how I build"
                description="Replace or reorder these in one centralized data file to match your actual experience."
              />
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index % skillIcons.length];
                return (
                  <Reveal key={group.title} delay={index * 0.04}>
                    <article className="skill-group">
                      <div className="skill-heading"><Icon aria-hidden="true" size={21} strokeWidth={1.6} /><h3>{group.title}</h3></div>
                      <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Projects />
        <ExperienceSection />
        <EducationSection />
        <LeadershipSection />

        <section className="resume-section" id="resume" aria-labelledby="resume-heading">
          <div className="shell resume-layout">
            <Reveal>
              <div>
                <p className="eyebrow">One-page overview</p>
                <h2 id="resume-heading">Need the concise version?</h2>
                <p>View or download my resume for education, technical experience, projects, and leadership in a recruiter-friendly format.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <a className="resume-link" href={profile.resumePath} target="_blank" rel="noreferrer">
                <span><Download aria-hidden="true" /> Download resume</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
