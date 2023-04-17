import React, { useState } from "react";
import { addPets, deletePet, uploadImgs, deleteImg } from "../../util/api";
import { petUploadHelper } from "../../util/formHelper";
import { ButtonDialog } from "./ButtonDIalog";
import { PetForm } from "./PetForm";

export const PetFormContainer = ({ initFormState, initImgState, title }) => {
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
    setImages([...images, ...selectedFiles]);
  };

  const handleSubmit = async () => {
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
      const uploadImgResponse = await uploadImgs(data);
      const imageUrl = await uploadImgResponse.json();
      formState.images = imageUrl;
      const addPetsResponse = await addPets(formState);
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
    // setDisableButton(true);
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
      const response = await fetch("/admin/edit-pet", {
        mode: "cors",
        method: "PUT",
        body: data,
      });
      // if (response.ok) {
      //   setAlertText("new pet added");
      //   setFormState(initFormState);
      //   setImages(initImgState);
      //   setDisableButton(false);
      //   setTimeout(() => {
      //     setAlertText("");
      //   }, 2000);
      // }
    } catch (error) {
      setAlertText("failed to add the pet");
      console.log(error);
    }
  };

  return (
    <PetForm
      formState={formState}
      images={images}
      disableButton={disableButton}
      alertText={alertText}
      title={title}
      setImages={setImages}
      deleteImg={deleteImg}
      deletePet={deletePet}
      handleInputChange={handleInputChange}
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
    />
  );
};
