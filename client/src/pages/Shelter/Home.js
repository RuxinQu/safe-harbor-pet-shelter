import React, { useEffect } from "react";
import { Hero } from "../../components/Home/Hero";
import { Intro } from "../../components/Home/Intro";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Intro />
    </>
  );
}
