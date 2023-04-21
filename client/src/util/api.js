const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getPets = async (type) => {
  const result = await fetch("/pets", options);
  const jsonResult = await result.json();
  if (type === "all") {
    return jsonResult;
  } else {
    return jsonResult.filter((p) => p.type === type);
  }
};

export const getPetsByName = async (name) => {
  const result = await fetch("/pets", options);
  const jsonResult = await result.json();
  return jsonResult.filter((p) => {
    const petsName = p.name.toLowerCase();
    return petsName.includes(name.toLowerCase());
  });
};

export const getPetById = async (id) => {
  const result = await fetch("/pets", options);
  const jsonResult = await result.json();
  return jsonResult.find((p) => p._id === id);
};

export const sendAdoptForm = async (data) => {
  try {
    const response = await fetch("/pets/adopt", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const sendContactForm = async (data) => {
  try {
    const response = await fetch("/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const adminLogin = async (data) => {
  try {
    const response = await fetch("/admin/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const adminLogout = async () => {
  try {
    const response = await fetch("/admin/logout", options);
    window.location.reload();
    return response;
  } catch (err) {
    return err.message;
  }
};

export const uploadImgs = async (data) => {
  try {
    const response = await fetch("/admin/upload-imgs", {
      mode: "cors",
      method: "POST",
      body: data,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deleteImg = async (key, petId, imgId) => {
  try {
    const response = await fetch(
      `/admin/delete-img/${key}/pet/${petId}/img/${imgId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    return err.message;
  }
};

export const addPets = async (data) => {
  try {
    const response = await fetch("/admin/add-pets", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deletePet = async (id) => {
  try {
    const pet = await getPetById(id);
    const imagesArr = pet.images;
    imagesArr.forEach(async (i) => {
      const url = new URL(i.url);
      await deleteImg(url.pathname.slice(1), id, i._id);
    });
    const response = await fetch(`/admin/delete-pet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
    return response;
  } catch (err) {
    return err.message;
  }
};

export const editPet = async (id, data) => {
  try {
    const response = await fetch(`/admin/edit-pet/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const WithAuth = async () => {
  try {
    const response = await fetch("/admin/auth", options);
    return response;
  } catch (err) {
    return err.message;
  }
};
