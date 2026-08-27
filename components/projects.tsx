"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-dark" id="projects" aria-labelledby="projects-heading">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="Engineering work presented through the problem, implementation, technical decisions, and verified outcome."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-index" aria-hidden="true">0{index + 1}</div>
              <div>
                {project.label ? <p className="project-label">{project.label}</p> : null}
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>

              <ul className="technology-list" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <details className="project-details">
                <summary>
                  Technical details <ChevronDown aria-hidden="true" size={17} />
                </summary>
                <div className="project-details-content">
                  <div>
                    <h4>What I built</h4>
                    <p>{project.built}</p>
                  </div>
                  <div>
                    <h4>Implementation</h4>
                    <ul>
                      {project.technicalDetails.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  {project.impact ? (
                    <div>
                      <h4>Result</h4>
                      <p>{project.impact}</p>
                    </div>
                  ) : null}
                </div>
              </details>

              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" size={17} /> Source <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                ) : (
                  <span className="link-placeholder"><Github aria-hidden="true" size={17} /> Add repository</span>
                )}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink aria-hidden="true" size={17} /> Demo <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
