import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <>
      <Hero />,
      <section id="categories">
        <Categories />
      </section>
    </>
  );
}

export default HomePage;