"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Baloto web",
    description: "I worked on the restructuring and improvement of the Baloto website under the company HouseMedia.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://baloto.com/",
  },
  {
    id: 2,
    title: "Colombia Lider web",
    description: "As a Frontend Developer, I collaborated with the HouseMedia team to develop the main website for 'Colombia Lider,' a platform dedicated to the recognition and awarding of public servants in Colombia",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.colombialider.org/",
  },
  {
    id: 3,
    title: "Gallant Luxury web",
    description: "At HouseMedia, we developed the landing page for Gallant Luxury.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.gallantluxuryservice.com/index.html",
  },
  {
    id: 4,
    title: "Medcar",
    description: "At HouseMedia, we developed an intranet from scratch for MedCar, a company based in the United States.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://medcar.grupohousemedia.com/login/?next=/",
  },
  {
    id: 5,
    title: "Intranet Humboldt",
    description: "With MW, we developed the intranet for the Humboldt Institute, revamping the design previously in use.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    previewUrl: "http://intranet.humboldt.org.co/",
  },
  {
    id: 6,
    title: "Air Force web",
    description: "With HouseMedia, we developed the landing page for the Colombian Air Force.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.fac.mil.co/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
