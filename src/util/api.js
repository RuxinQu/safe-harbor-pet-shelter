const baseUrl = "https://safe-harbor-pet-shelter.herokuapp.com";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getPets = async (type) => {
  const result = await fetch(`${baseUrl}/api/pets`, options);
  const jsonResult = await result.json();
  if (type === "all") {
    return jsonResult;
  } else {
    return jsonResult.filter((p) => p.type === type);
  }
};

export const getPetsByName = async (name) => {
  const result = await fetch(`${baseUrl}/api/pets`, options);
  const jsonResult = await result.json();
  return jsonResult.filter((p) => {
    const petsName = p.name.toLowerCase();
    return petsName.includes(name.toLowerCase());
  });
};

export const getPetById = async (id) => {
  const result = await fetch(`${baseUrl}/api/pets`, options);
  const jsonResult = await result.json();
  return jsonResult.find((p) => p._id === id);
};

export const sendAdoptForm = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/api/pets/adopt`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const sendContactForm = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/api/pets/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const uploadImgs = async (data, token) => {
  try {
    const response = await fetch(`${baseUrl}/admin/upload-imgs`, {
      mode: "cors",
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.log(err);
  }
};

export const deleteImg = async (key, petId, imgId, token) => {
  try {
    const response = await fetch(
      `${baseUrl}/admin/delete-img/${key}/pet/${petId}/img/${imgId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addPets = async (data, token) => {
  try {
    const response = await fetch(`${baseUrl}/admin/add-pets`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deletePet = async (id, token) => {
  try {
    const pet = await getPetById(id);
    const imagesArr = pet.images;
    imagesArr.forEach(async (i) => {
      const url = new URL(i.url);
      await deleteImg(url.pathname.slice(1), id, i._id);
    });
    const response = await fetch(`${baseUrl}/admin/delete-pet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const editPet = async (id, data, token) => {
  try {
    const response = await fetch(`${baseUrl}/admin/edit-pet/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const WithAuth = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/admin/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
