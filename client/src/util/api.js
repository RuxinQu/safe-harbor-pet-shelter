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
  return jsonResult.filter((p) => p.name.includes(name));
};

export const getPetsById = async (id) => {
  const result = await fetch("/pets", options);
  const jsonResult = await result.json();
  return jsonResult.find((p) => p._id === id);
};
