import React from "react";
import ClientSlider from "../components/ClientSlider";
import Me from "../components/Me";
import Projects from "../components/Projects";
import PersonalProjects from "../components/PersonalProjects";

const Home = () => {
  return (
    <>
      <div className="content-center justify-center w-full space-y-8 sm:space-y-16 p-4 pb-[64px]">
        <Me />
        <ClientSlider />
        <Projects />
      </div>
    </>
  );
};

export default Home;
