"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SellProGPT",
    description:
      "Online selling platform. Users can upload their products to sell, and they will be available for buying after admin approval. Auth, admin and user dashboard, and many other features.",
    image: "/images/projects/sellpro.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/SellProGPT",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Jampod",
    description:
      "A dynamic platform that seamlessly integrates live music jams and insightful podcasts. User can create their own music group and listen to their favorite musicians.                  ",
    image: "/images/projects/jampod.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/Jampod",
    previewUrl: "https://jampod-three.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Multi page responsive website for a shoe store. You can select different variations of any shoe, add to cart, filter shoes by various parameters, etc.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/Ecommerce-App",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Foodie Buddy",
    description:
      "Food Ordering Site where users can interact with nearby restaurants and order their favorite food . Used Swiggy live api to find the restaurants ",
    image: "/images/projects/foodOrder.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/React",
    previewUrl: "https://food-studio.netlify.app/",
  },
  {
    id: 5,
    title: "IPL Dashboard",
    description:
      "Dashboard to display IPL data using various charts in multiple cateogries. Uses Next, Chart.js and ChakraUI.",
    image: "/images/projects/ipl-dashboard.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/IPL-Dashboard",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Sorting Algorithm Visualizer",
    description:
      "Dynamic and interactive visualizations of Sorting Algorithms like QuickSort, MergeSort,Selection sort and more. Implemented user-friendly controls for customizing array size, animation speed, and algorithm selection. ",
    image: "/images/projects/sorting.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devro45/Sorting-Algorithms-Visualizer",
    previewUrl: "https://mysortingalgovisualizer.netlify.app/",
  },
  {
    id: 7,
    title: "Android Smart City Traveller",
    description:
      "Innovative mobile application designed to enhance the travel experience within urban environments. This Android app serves as an intelligent guide for travelers exploring cities, providing a comprehensive range of features to facilitate navigation, discovery, and enjoyment.",
    image: "/images/projects/smart-city.jpg",
    tag: ["Mobile"],
    gitUrl: "https://github.com/devro45/smart-city-traveller",
    previewUrl: "/",
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
