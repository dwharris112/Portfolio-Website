import { BookOpen, ChevronDown, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function EducationSection() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-heading">
      <div className="shell">
        <SectionHeading eyebrow="Academic foundation" title="Education" />
        <Reveal>
          <div className="education-layout">
            <div className="education-identity">
              <div className="school-mark" aria-hidden="true"><GraduationCap size={34} /></div>
              <div>
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
                <div className="education-meta">
                  <span>{education.dates}</span>
                  <span><MapPin aria-hidden="true" size={15} /> {education.location}</span>
                </div>
              </div>
            </div>

            <div className="education-details">
              <p className="academic-note">{education.academicNote}</p>
              <details>
                <summary>
                  <span><BookOpen aria-hidden="true" size={18} /> Relevant coursework</span>
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <ul className="coursework-list">
                  {education.coursework.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </details>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
