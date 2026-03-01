import React from "react";
import ClientSlider from "../components/ClientSection";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-ink/10 shadow-sm p-6 sm:p-10">
          <Projects />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-ink/10 shadow-sm overflow-hidden">
          <ClientSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
