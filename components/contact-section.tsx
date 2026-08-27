"use client";

import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <Reveal>
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-heading">Let&apos;s build something rigorous.</h2>
              <p>
                I&apos;m interested in internships, co-ops, research, and engineering roles spanning embedded systems, digital design, semiconductors, and computing.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={18} /> Email me
              </a>
              <button className="copy-button" type="button" onClick={copyEmail} aria-live="polite">
                {copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
                {copied ? "Copied" : profile.email}
              </button>
            </div>

            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
              <a href={profile.resumePath} target="_blank" rel="noreferrer"><Download aria-hidden="true" /> Resume</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
