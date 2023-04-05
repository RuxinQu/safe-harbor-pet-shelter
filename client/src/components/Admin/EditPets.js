import React, { useState, useEffect } from "react";
import { getPets } from "../../util/api";
import { AddPets } from "./AddPets";

export const EditPets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getAllPets = async () => {
      const pets = await getPets("all");
      console.log(pets);
      setPets([...pets]);
    };
    getAllPets();
  });

  return (
    <div>
      <h3>Edit Pets</h3>
      {/* {pets.map((p) => (
      <AddPets />
      ))} */}
    </div>
  );
};
