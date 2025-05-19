import React from "react";

const About = () => {
  return (
    <>
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px] text-[40px] sm:text-[60px]">
        About
      </h2>
      <div className="w-[90%] mx-auto mt-12 bg-white shadow-md rounded-xl p-6 md:p-10">
        <div className="flex justify-between">
          <a
            className="flex-1 text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] ml-[30px] md:ml-[50px]"
            href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
          >
            LinkedIn
          </a>
          <a
            className="flex-1 text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] mr-[30px] md:mr-[50px]"
            href="https://github.com/AdrianKitsu"
          >
            GitHub
          </a>
        </div>
        <h4 className="font-caslon text-[24px] text-[#312f30] mt-[30px] mb-[15px]">
          Personal
        </h4>
        <p className="mb-[10px]">
          I'm a results-driven web developer with 3 years of experience
          designing, developing, and maintaining websites for a variety of
          clients. I'm passionate about exploring the latest trends and enjoy
          experimenting with new features and tools.
        </p>
        <p className="mb-[10px]">
          I began my journey in support, where I gained a strong foundation by
          troubleshooting front-end and server-side issues, creating new
          components, and communicating directly with clients to clarify
          requirements, estimate development time, and suggest improvements.
        </p>
        <p className="mb-[10px]">
          Over time, I transitioned into project-based work, contributing to
          sprint planning, task organization, and story point assignments. I've
          consistently delivered on tight deadlines and played a key role in
          several successful launches.
        </p>
        <p>
          Beyond just building visually appealing interfaces, I'm committed to
          crafting experiences that are intuitive and enjoyable for users.
        </p>
        <h4 className="font-caslon text-[24px] text-[#312f30] mt-[30px] mb-[15px]">
          About This Site
        </h4>
        <p>
          This site was developed using TypeScript, Tailwind, and ThreeJS(coming
          soon). Other languages I've worked with include HTML5, CSS3, SCSS,
          JavaScript, React, Next.js, jQuery, DOM, Node.js, and PHP.
          <br /> I'm currently learning how to use ThreeJS to further advance my
          skillset and building interactive sites. Find my CV below!
        </p>
        <h4 className="mt-[30px] mb-[15px]">
          <a
            className="font-caslon text-[24px] text-[#312f30] mt-[30px] mb-[15px]"
            href="/cv.pdf"
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
