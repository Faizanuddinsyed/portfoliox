import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { title: "E-Commerce App", description: "Built with MERN & Razorpay" },
    { title: "Blog Platform", description: "React + Node.js with CRUD" },
  ];

  return (
    <section
      id="projects"
      className="p-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-40 bg-white dark:bg-gray-800 shadow rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
