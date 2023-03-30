import React, { useEffect } from "react";
import { PetHero } from "../components/Pet";

export default function AdoptPet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PetHero />
    </>
  );
}
