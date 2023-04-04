export const applicationHelper = (pet) => {
  return {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    occupation: "",
    household: "",
    yard: "",
    pets: "",
    reason: "",
    id: pet._id,
    dogName: pet.name,
    breed: pet.breed,
    age: pet.age,
    size: pet.size,
    gender: pet.gender,
    activity: pet.activity,
  };
};

export const petUploadHelper = [
  "name",
  "type",
  "breed",
  "age",
  "size",
  "gender",
  "activity",
];
