import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { sendAdoptForm } from "../../util/api";
import "react-toastify/dist/ReactToastify.css";

export const AdoptForm = ({ pet }) => {
  const [formData, setFormData] = useState({
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
  });
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    const response = await sendAdoptForm(formData);
    if (response.ok) {
      toast.success("Form submitted!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Fail to submit the form!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Adoption Application Form</h2>
      <p>Please fill out the form below to apply to adopt {pet.name}.</p>

      <fieldset>
        <legend>About You</legend>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="address-level2"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="state">State/Province:</label>
          <input
            type="text"
            id="state"
            name="state"
            autoComplete="address-level1"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="zip">ZIP/Postal Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            autoComplete="postal-code"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            autoComplete="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            required
            value={formData.occupation}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="household">Number of people in your household:</label>
          <input
            type="number"
            id="household"
            name="household"
            min="0"
            required
            value={formData.household}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="yard">Do you have a yard?</label>
          <select
            id="yard"
            name="yard"
            value={formData.yard}
            onChange={handleInputChange}
          >
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="pets">Do you have any other pets?</label>
          <select
            id="pets"
            name="pets"
            value={formData.pets}
            onChange={handleInputChange}
          >
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="reason">Reason for Adoption:</label>
          <textarea
            id="reason"
            name="reason"
            required
            value={formData.reason}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>About the {pet.type}</legend>

        <div>
          <label htmlFor="dog-name">Name:</label>
          <input
            type="text"
            id="dog-name"
            name="dog-name"
            required
            value={pet.name}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            required
            value={pet.breed}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={pet.age} readOnly />
        </div>

        <div>
          <label htmlFor="size">Size:</label>
          <input id="size" name="size" value={pet.size} readOnly />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <input id="gender" name="gender" value={pet.gender} readOnly />
        </div>

        <div>
          <label htmlFor="activity-level">Activity Level:</label>
          <input
            id="activity-level"
            name="activity-level"
            value={pet.activityLevel}
            readOnly
          />
        </div>
      </fieldset>
      <div>
        <button type="submit" style={{ padding: "5px", marginTop: "10px" }}>
          Submit
        </button>
      </div>
      <div>
        <ToastContainer />
      </div>
    </form>
  );
};
