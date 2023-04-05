import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WithAuth, adminLogout, getPets } from "../../util/api";
import { PetForm } from "../../components/Admin/PetForm";
import { petUploadHelper } from "../../util/formHelper";

export default function Admin() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    const Auth = async () => {
      const result = await WithAuth();
      if (result.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate("/admin/login");
      }
    };
    Auth();
  });
  useEffect(() => {
    const getAllPets = async () => {
      const pets = await getPets("all");
      setPets([...pets]);
    };
    getAllPets();
  }, [pets]);
  // turn the array to an obj with initial value empty String
  const addInitFormState = petUploadHelper.reduce(
    (acc, curr) => ({ ...acc, [curr]: "" }),
    {}
  );

  return (
    isLoggedIn && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={adminLogout} style={{ margin: "1rem" }}>
          Logout
        </button>

        <PetForm
          initFormState={addInitFormState}
          initImgState={[]}
          title={"Add Pets"}
        />
        {pets.map((p) => {
          // const { images, ...p } = p;
          const { images, ...editInitFormState } = p;
          return (
            <PetForm
              key={p.description}
              initFormState={editInitFormState}
              initImgState={images}
              title={"Edit Pets"}
            />
          );
        })}
      </div>
    )
  );
}
