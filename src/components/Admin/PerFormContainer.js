import React, { useState } from "react";
import { addPets, editPet, uploadImgs } from "../../util/api";
import { PetForm } from "./PetForm";
import Cookies from "js-cookie";

export const PetFormContainer = ({ initFormState, title }) => {
  const authToken = Cookies.get("AuthToken");
  const [formState, setFormState] = useState(initFormState);
  // for the multer upload form, this property will be appended to formstate
  const [formImage, setFormImage] = useState([]);
  // for displaying the pets images retrieved from the db
  const [petImage, setPetImage] = useState(initFormState.images);
  const [alertText, setAlertText] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFormImage([...formImage, ...selectedFiles]);
  };

  const handleSubmit = async () => {
    setDisableButton(true);
    // create new FormData
    const data = new FormData();
    // append the images
    formImage.forEach((image) => {
      data.append("images", image);
    });
    try {
      const uploadImgResponse = await uploadImgs(data, authToken);
      formState.images = uploadImgResponse.images;
      const addPetsResponse = await addPets(formState, authToken);
      if (addPetsResponse.ok) {
        setAlertText("new pet added");
        setDisableButton(false);
        setTimeout(() => {
          setAlertText("");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setAlertText("failed to add the pet");
      console.log(error);
    }
  };

  const handleEdit = async () => {
    setDisableButton(true);
    const data = new FormData();
    // append the images
    formImage.forEach((image) => {
      data.append("images", image);
    });
    try {
      if (formImage.length) {
        const uploadImgResponse = await uploadImgs(data, authToken);
        const imageUrl = uploadImgResponse.images;
        formState.images.push(...imageUrl);
      }
      const response = await editPet(formState._id, formState, authToken);
      if (response.ok) {
        setAlertText("pet updated");
        setDisableButton(false);
        setFormImage([]);
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
    <PetForm
      formState={formState}
      handleInputChange={handleInputChange}
      handleFormImageChange={handleFormImageChange}
      petImage={petImage}
      setPetImage={setPetImage}
      disableButton={disableButton}
      alertText={alertText}
      title={title}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      authToken={authToken}
    />
  );
};
