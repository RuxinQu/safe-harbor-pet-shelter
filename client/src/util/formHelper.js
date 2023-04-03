export const formHelper = (pet) => {
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
    activityLevel: pet.activityLevel,
  };
};
