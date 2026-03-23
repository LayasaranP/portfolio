"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Bearing Fault Diagnosis using ML Algorithms",
    description:
      "Engineered an end-to-end machine learning pipeline to detect and classify bearing faults from the CWRU dataset. Processed time-domain vibration features to categorize complex sub-faults into primary physical locations (cage, inner race, outer race) and trained traditional ML models (Random Forest, SVM, KNN) for high-accuracy prediction.",
    details:
      "The project is a machine learning pipeline designed to detect and classify faults in rotating machinery using the CWRU (Case Western Reserve University) Bearing Dataset. It automates the retrieval of this data and processes time-domain features to map complex sub-faults into three primary physical bearing locations: the cage, inner race, and outer race. Finally, the system trains three different classification algorithms (Random Forest, SVM, and KNN) to predict these fault locations and generates scatter plots to visually evaluate their performance.",
    tech: [
      "Numpy",
      "Pandas",
      "Matplotlib",
    ],
    github: "https://github.com/LayasaranP/Bearing_fault_analysis",
    demo: "https://github.com/LayasaranP/Bearing_fault_analysis",
    image: "/bearing_fault_architecture_diagram.png",
  },
  {
    title: "Hybrid Log Message Classification",
    description:
      "Designed a hybrid log classification pipeline combining fast regex rules for structured patterns, Sentence Transformers + Logistic Regression for accurate supervised classification, and LLM fallback for ambiguous/rare cases.",
    details:
      "Deployed as a FastAPI REST service (with Swagger UI) that processes CSV logs and returns enriched predictions. Balanced speed, accuracy, and robustness while extending regex coverage to 25+ patterns, directly applicable to observability and anomaly detection systems.",
    tech: [
      "Python",
      "FastAPI",
      "Sentence Transformers",
      "scikit-learn",
      "LLMs",
    ],
    github: "https://github.com/LayasaranP/Log-Classification",
    demo: "https://github.com/LayasaranP/Log-Classification",
    image: "/log_classification_architecture_diagram.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-white/80 to-transparent flex-1 max-w-xs"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 items-center group"
            >
              {/* Project Content */}
              <div
                className={`lg:col-span-7 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <p className="text-indigo-400 font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl p-8 text-gray-400 text-sm leading-relaxed mb-6 shadow-2xl relative z-10 group-hover:bg-white/[0.04] transition-colors">
                  <p className="mb-4">{project.description}</p>
                  <p>{project.details}</p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-8 text-xs font-mono text-gray-400">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 text-gray-400">
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-white hover:scale-110 transition-all"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="hover:text-indigo-400 hover:scale-110 transition-all"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Project Image Placeholder (Abstract) */}
              <div
                className={`lg:col-span-5 relative h-72 lg:h-[250px] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 group-hover:border-indigo-500/30 transition-all duration-500 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0a0a0a] to-[#0a0a0a] opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>

                {/* Abstract geometric pattern */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.title} architecture diagram`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
