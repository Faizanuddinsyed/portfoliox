import React from "react";
import profileImg from "../assets/passportsize.jpg"; // Profile image

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 rounded-full shadow-lg border-4 border-blue-500"
            />
          </div>

          {/* Right: About Text */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm{" "}
              <span className="font-bold text-blue-500">Syed Faizanuddin</span>,
              a passionate Full Stack Developer with 3 years of experience in
              the MERN stack. I specialize in building scalable web applications
              with clean, maintainable code.
            </p>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I love problem-solving, working with the latest web technologies,
              and creating user-friendly experiences. In my free time, I explore
              new frameworks, contribute to open source, and work on side
              projects.
            </p>

            {/* ✅ Corrected Resume Download Button */}
            <a
              href="/syedfaizan1.docx" // Points to the file in the public folder
              download="Syed_Faizanuddin_Resume.docx"
              className="mt-6 inline-block px-6 py-2 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
