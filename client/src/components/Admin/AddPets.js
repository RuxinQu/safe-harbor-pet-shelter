import React, { useState } from "react";
import { addPets } from "../../util/api";
import { petUploadHelper } from "../../util/formHelper";

export const AddPets = () => {
  // turn the array to an obj with initial value empty String
  const stateObj = petUploadHelper.reduce(
    (acc, curr) => ({ ...acc, [curr]: "" }),
    {}
  );
  const [formState, setFormState] = useState(stateObj);
  const [images, setImages] = useState([]);
  const [alertText, setAlertText] = useState("");

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
        setFormState(stateObj);
        setImages([]);
      }
    } catch (error) {
      setAlertText("failed to add the pet");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {petUploadHelper.map((item) => {
        return (
          <div key={item}>
            <label htmlFor={`${item}`}>{item}:</label>
            <input
              type="text"
              id={`${item}`}
              name={`${item}`}
              value={formState[item]}
              onChange={handleInputChange}
              required
            />
          </div>
        );
      })}
      <div>
        <label htmlFor="images">Images:</label>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Submit</button>
      {alertText}
    </form>
  );
};
