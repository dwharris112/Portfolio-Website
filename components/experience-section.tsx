import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="shell experience-layout">
        <div className="experience-intro">
          <SectionHeading
            eyebrow="Professional work"
            title="Experience"
            description="Technical ownership, engineering judgment, and measurable contributions."
          />
          <BriefcaseBusiness className="section-mark" aria-hidden="true" strokeWidth={1.2} />
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.organization}-${item.role}`} delay={index * 0.06}>
              <article className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-meta">
                  <p>{item.dates}</p>
                  {item.location ? <span>{item.location}</span> : null}
                </div>
                <div className="timeline-content">
                  {item.placeholder ? <p className="placeholder-label">Placeholder experience</p> : null}
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <ul>
                    {item.accomplishments.map((accomplishment) => (
                      <li key={accomplishment}>{accomplishment}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
