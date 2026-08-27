import { ArrowRight, Users } from "lucide-react";
import { leadership } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function LeadershipSection() {
  return (
    <section className="section leadership-section" id="leadership" aria-labelledby="leadership-heading">
      <div className="shell">
        <SectionHeading
          eyebrow="Beyond the lab"
          title="Leadership & entrepreneurship"
          description="Initiative, communication, organization, and the ability to move teams from idea to execution."
        />
        <div className="leadership-list">
          {leadership.map((item, index) => (
            <Reveal key={`${item.organization}-${item.role}`} delay={index * 0.06}>
              <article className="leadership-item">
                <div className="leadership-icon"><Users aria-hidden="true" /></div>
                <div className="leadership-title">
                  {item.placeholder ? <p className="placeholder-label">Placeholder leadership</p> : null}
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <p className="leadership-dates">{item.dates}</p>
                <ul>
                  {item.accomplishments.map((accomplishment) => (
                    <li key={accomplishment}><ArrowRight aria-hidden="true" size={16} /> {accomplishment}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
