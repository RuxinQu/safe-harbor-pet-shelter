import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { WithAuth, getPets, getPetsByName } from "../../util/api";
import { PetFormContainer } from "../../components/Admin/PerFormContainer";
import { petUploadHelper } from "../../util/formHelper";

export default function Admin() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [value, setValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authToken = Cookies.get("AuthToken");
  useEffect(() => {
    const Auth = async () => {
      const result = await WithAuth(authToken);
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
  }, []);
  // turn the array to an obj with initial value empty String
  const addInitFormStateText = petUploadHelper.reduce(
    (acc, curr) => ({ ...acc, [curr]: "" }),
    {}
  );
  const addInitFormState = { ...addInitFormStateText, images: [] };

  const handleSearch = async () => {
    const pets = await getPetsByName(value);
    setPets([...pets]);
  };

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
        <button
          onClick={() => {
            Cookies.remove("AuthToken");
            window.location.assign("/admin/login");
          }}
          style={{ margin: "1rem" }}
        >
          Logout
        </button>
        {/* add pet section*/}
        <h3>Add Pets</h3>
        <PetFormContainer initFormState={addInitFormState} />

        {/* edit existing pets section */}
        <h3>Edit Pets</h3>
        {/* search input */}
        <div>
          <input
            placeholder="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* by default showing all the pets */}
        {pets.length ? (
          pets.map((p) => {
            // const { images, ...editInitFormState } = p;
            return (
              <PetFormContainer
                key={p.name + p.type + p.gender + p.age}
                initFormState={p}
                title={"edit"}
              />
            );
          })
        ) : (
          <p>No Result</p>
        )}
      </div>
    )
  );
}
