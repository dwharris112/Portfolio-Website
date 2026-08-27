import type {
  ExperienceItem,
  LeadershipItem,
  Project,
  SkillGroup
} from "@/lib/types";

// Edit this file to personalize the entire site. Placeholder content is explicitly
// labeled so no accomplishments or credentials are presented as factual.
export const profile = {
  name: "David Harris",
  initials: "DH",
  title: "Electrical & Computer Engineering Student",
  university: "Virginia Tech",
  graduation: "Expected Graduation: May 2028",
  location: "Blacksburg, Virginia",
  email: "davidharris@vt.edu",
  tagline:
    "Building reliable systems where embedded hardware, digital design, and software meet.",
  shortBio:
    "I am an Electrical & Computer Engineering student at Virginia Tech interested in the full computing stack—from semiconductor devices and digital logic to embedded firmware and production software. I am seeking internships, co-ops, research roles, and engineering positions where I can turn rigorous technical ideas into dependable systems.",
  availability: "Seeking engineering opportunities",
  resumePath: "/resume.pdf",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/david-harris-a56042276/",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "MATLAB"]
  },
  {
    title: "Hardware & Digital Design",
    skills: ["Verilog / SystemVerilog", "FPGA", "Digital Logic", "Circuit Analysis", "PCB Design"]
  },
  {
    title: "Embedded Systems",
    skills: ["Microcontrollers", "RTOS", "UART / SPI / I²C", "Device Drivers", "Debugging"]
  },
  {
    title: "Software & Frameworks",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "PostgreSQL", "Git"]
  },
  {
    title: "Engineering Tools",
    skills: ["Vivado", "LTspice", "KiCad", "Oscilloscopes", "Logic Analyzers", "Linux"]
  },
  {
    title: "Engineering Practice",
    skills: ["Technical Writing", "Test Planning", "Requirements", "Team Leadership", "Agile"]
  }
];

export const projects: Project[] = [
  {
    name: "Interactive Circuit Simulation & Algorithm Visualizer",
    label: "React, TypeScript, Graph Algorithms, Numerical Simulationm, Docker",
    summary:
      "Interactive web-based circuit simulator and algorithm visualizer for constructing RC/RLC circuits, analyzing circuit behavior, and visualizing voltage/current waveforms.",
    built:
      "Built a React/TypeScript interface for interactively constructing RC/RLC circuits with component and connection editing. Implemented grap based circuit topology and numerical circuit analysis to calculate and visualize transient voltage/current behavior. Containerized the app with Docker for reproducible development and deployment.",
    technicalDetails: [
      "Developed numerical simulation logic for RC/RLC differential equation behavior, converting circuit parameters into time domain voltage/current waveforms..",
      "Tested component combinations and circuit configurations to validate graph traversal, simulation outputs, and real time UI updates.",
      "Seperated the application into presentation, circuit state, graph and simulation layers allowing the visualization layer to interact with the underlying circuit model without coupling directly to numerical analysis."
    ],
    technologies: ["React/TypeScript", "RC/RLC transient analysis", "Docker"],
    impact: "Placeholder: add a measured result such as latency, accuracy, power, throughput, or reliability.",
    featured: true
  },
  {
    name: "FPGA / Digital Design Project — Replace Me",
    label: "Placeholder project",
    summary:
      "Use this project to show RTL design, verification, timing, computer architecture, or digital signal processing work.",
    built:
      "Placeholder: state the module or complete digital system you designed and implemented.",
    technicalDetails: [
      "Replace with the architecture, state machine, datapath, or protocol implemented.",
      "Replace with simulation, testbench, synthesis, and timing-closure details.",
      "Replace with resource utilization or performance measurements."
    ],
    technologies: ["SystemVerilog", "FPGA", "Vivado", "Python"],
    impact: "Placeholder: add verified frequency, resource usage, throughput, or test coverage.",
    featured: true
  },
  {
    name: "Software / Computing Project — Replace Me",
    label: "Placeholder project",
    summary:
      "Show that you can build maintainable software around engineering data, hardware, automation, or a user-facing product.",
    built:
      "Placeholder: describe the application, service, developer tool, or data pipeline and your ownership.",
    technicalDetails: [
      "Replace with the system design and key API or data-model decision.",
      "Replace with performance, testing, deployment, or reliability work.",
      "Replace with a difficult bug or engineering constraint you resolved."
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    impact: "Placeholder: add users, time saved, performance improvement, or another defensible result.",
    featured: true
  }
];

export const experience: ExperienceItem[] = [
  {
    organization: "Organization Name — Replace Me",
    role: "Engineering Role",
    location: "City, State",
    dates: "Month 20XX — Month 20XX",
    placeholder: true,
    accomplishments: [
      "Replace with an accomplishment that begins with a strong action verb and identifies what changed.",
      "Replace with a technical contribution, including tools and constraints where useful.",
      "Replace with a quantified result; do not invent a number if one is unavailable."
    ]
  },
  {
    organization: "Laboratory, Team, or Employer — Replace Me",
    role: "Research / Technical Role",
    location: "Blacksburg, VA",
    dates: "Month 20XX — Present",
    placeholder: true,
    accomplishments: [
      "Replace with the research question, product objective, or engineering responsibility.",
      "Replace with how you designed, tested, analyzed, or documented the work.",
      "Replace with the outcome, publication, prototype, presentation, or handoff."
    ]
  }
];

export const education = {
  school: "Virginia Tech",
  degree: "B.S. in Electrical Engineering or Computer Engineering — Select One",
  dates: "Expected Month 20XX",
  location: "Blacksburg, Virginia",
  academicNote: "Add GPA, honors, minor, concentration, or scholarships only if applicable.",
  coursework: [
    "Embedded Systems",
    "Digital Systems Design",
    "Computer Architecture",
    "Microelectronics",
    "Signals and Systems",
    "Electronics",
    "Data Structures and Algorithms",
    "Operating Systems",
    "Engineering Design"
  ]
};

export const leadership: LeadershipItem[] = [
  {
    organization: "Student Organization / Venture — Replace Me",
    role: "Leadership or Founder Role",
    dates: "Month 20XX — Present",
    placeholder: true,
    accomplishments: [
      "Replace with the team, program, budget, event, or initiative you led.",
      "Replace with a measurable membership, revenue, attendance, growth, or delivery result.",
      "Replace with evidence of communication, ownership, organization, or entrepreneurship."
    ]
  }
];
