import React from "react";
import LinkedIn from "../assets/images/LinkedIn.png";
import GitHub from "../assets/images/GitHub.png";

const About = () => {
  return (
    <>
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px] text-[40px] sm:text-[60px]">
        About
      </h2>
      <div className="w-[90%] mx-auto mt-12 bg-white shadow-md rounded-xl p-6 md:p-10">
        <div className="flex justify-between">
          <a
            className="flex-1 flex text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] ml-[30px] md:ml-[50px]"
            href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={LinkedIn}
            />
            LinkedIn
          </a>
          <a
            className="flex-1 flex text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] mr-[30px] md:mr-[50px]"
            href="https://github.com/AdrianKitsu"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={GitHub}
            />
            GitHub
          </a>
        </div>
        <h4 className="font-caslon text-[26px] text-[#312f30] mt-[30px] mb-[15px]">
          Personal
        </h4>
        <p className="mb-[10px] font-urw">
          I'm a results-driven web developer with 3 years of experience
          designing, developing, and maintaining websites for a variety of
          clients. I'm passionate about exploring the latest trends and enjoy
          experimenting with new features and tools.
        </p>
        <p className="mb-[10px] font-urw">
          I began my journey in support, where I gained a strong foundation by
          troubleshooting front-end and server-side issues, creating new
          components, and communicating directly with clients to clarify
          requirements, estimate development time, and suggest improvements.
        </p>
        <p className="mb-[10px] font-urw">
          Over time, I transitioned into project-based work, contributing to
          sprint planning, task organization, and story point assignments. I've
          consistently delivered on tight deadlines and played a key role in
          several successful launches.
        </p>
        <p className="font-urw">
          Beyond just building visually appealing interfaces, I'm committed to
          crafting experiences that are intuitive and enjoyable for users.
        </p>
        <h4 className="font-caslon text-[26px] text-[#312f30] mt-[30px] mb-[15px]">
          About This Site
        </h4>
        <p className="font-urw">
          This site was developed using TypeScript, Tailwind, and ThreeJS(coming
          soon). Other languages I've worked with include HTML5, CSS3, SCSS,
          JavaScript, React, Next.js, jQuery, DOM, Node.js, and PHP.
          <br /> I'm currently learning how to use ThreeJS to further advance my
          skillset and building interactive sites. Find my CV below!
        </p>
        <h4 className="mt-[30px] mb-[15px]">
          <a
            className="font-caslon text-[26px] text-[#312f30] mt-[30px] mb-[15px] hover:text-[28px] hover:text-[#3b9ff0] duration-500 ease-in-out cursor-pointer"
            href="/Adrian Borges Solari - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My CV
          </a>
        </h4>
      </div>
    </>
  );
};

export default About;
