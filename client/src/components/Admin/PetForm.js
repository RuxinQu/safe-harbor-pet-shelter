export const PetForm = ({
  handleImageChange,
  handleInputChange,
  handleSubmit,
  formState,
}) => {
  return (
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
      {/* {petUploadHelper.map((item) => {
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
    })} */}
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
      <button type="submit">Submit</button>
    </form>
  );
};
