import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-4xl font-bold">Hi, I'm Faizan</h2>
      <TypeAnimation
        sequence={[
          "Full Stack Developer", 1000,
          "MERN Stack Expert", 1000,
          "React Enthusiast", 1000
        ]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
        className="text-xl text-gray-600 dark:text-gray-300 mt-2"
      />
      <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded">Download Resume</button>
    </section>
  );
};

export default Hero;
