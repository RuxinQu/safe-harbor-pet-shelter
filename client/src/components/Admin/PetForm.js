import React, { useState } from "react";
import { addPets, deletePet } from "../../util/api";
import { petUploadHelper } from "../../util/formHelper";

export const PetForm = ({ initFormState, initImgState, title }) => {
  const [formState, setFormState] = useState(initFormState);
  const [images, setImages] = useState(initImgState);
  const [alertText, setAlertText] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableButton(true);
    // create new FormData
    const data = new FormData();
    // append the text data
    petUploadHelper.forEach((item) => {
      data.append(item, formState[item]);
    });
    // append the images
    images.forEach((image) => {
      data.append("images", image);
    });
    try {
      const response = await addPets(data);
      if (response.ok) {
        setAlertText("new pet added");
        setFormState(initFormState);
        setImages(initImgState);
        setDisableButton(false);
        setTimeout(() => {
          setAlertText("");
        }, 2000);
      }
    } catch (error) {
      setAlertText("failed to add the pet");
      console.log(error);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Type: </label>
          <label>
            <input
              type="radio"
              name="type"
              value="cat"
              checked={formState.type === "cat"}
              onChange={handleInputChange}
            />
            Cat
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="dog"
              checked={formState.type === "dog"}
              onChange={handleInputChange}
            />
            Dog
          </label>
        </div>

        <div>
          <label htmlFor="breed">Breed: </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formState.breed}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formState.age}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="size">Size: </label>
          <select
            id="size"
            name="size"
            value={formState.size}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-large</option>
          </select>
        </div>

        <div>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formState.gender === "female"}
              onChange={handleInputChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formState.gender === "male"}
              onChange={handleInputChange}
            />
            Male
          </label>
        </div>

        <div>
          <label htmlFor="activity">Activity Level: </label>
          <select
            id="activity"
            name="activity"
            value={formState.activity}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="low">Sedentary/Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="athletic">Athletic</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            value={formState.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="images">
            Images <small>(up to 10 images at once)</small>:{" "}
          </label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div>
          {title === "Edit Pets" &&
            images.map((i) => {
              return (
                <div key={i.url} style={{ display: "inline-block" }}>
                  <img src={i.url} alt={formState.name} width={"100"} />
                  <button
                    type="button"
                    onClick={() => {
                      const newImageState = images.filter(
                        (img) => img._id !== i._id
                      );
                      setImages(newImageState);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
        </div>
        <button type="submit" disabled={disableButton}>
          {title === "Edit Pets" ? "Update" : "Submit"}
        </button>

        {title === "Edit Pets" && (
          <button
            type="button"
            style={{ display: "block" }}
            onClick={async () => {
              await deletePet(formState._id);
            }}
          >
            Delete
          </button>
        )}
      </form>
      <small style={{ color: "red" }}>{alertText}</small>
    </div>
  );
};
