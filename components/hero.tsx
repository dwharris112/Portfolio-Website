"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span aria-hidden="true" /> {profile.availability}
        </motion.div>

        <motion.p
          className="hero-kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {profile.university} · {profile.graduation}
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
          <span>{profile.title}</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <a className="button button-primary" href={profile.resumePath} target="_blank" rel="noreferrer">
            View resume <Download aria-hidden="true" size={17} />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <Mail aria-hidden="true" size={17} />
          </a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.34 }}
        >
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={18} /> GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={18} /> LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        aria-label="Abstract hardware and software signal path"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="visual-grid" aria-hidden="true" />
        <div className="visual-label visual-label--top">HARDWARE</div>
        <div className="visual-label visual-label--bottom">SOFTWARE</div>
        <div className="chip">
          <Cpu aria-hidden="true" size={38} strokeWidth={1.4} />
          <span>ECE</span>
        </div>
        <div className="trace trace-a" aria-hidden="true" />
        <div className="trace trace-b" aria-hidden="true" />
        <div className="trace trace-c" aria-hidden="true" />
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className={`signal signal-${index + 1}`}
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.55 }}
          />
        ))}
        <p>Design · Build · Validate</p>
      </motion.div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        Explore <ArrowDown aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
