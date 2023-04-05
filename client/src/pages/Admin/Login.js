import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../util/api";

export default function Login() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await adminLogin(formState);
    switch (response.status) {
      case 429:
        setResponse("Too many requests, please try again later");
        break;
      case 401:
        setResponse("Incorrect credentials");
        break;
      case 200:
        navigate("/admin");
        break;
      default:
        setResponse("Something went wrong");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Admin</h1>
      <form
        onSubmit={handleSubmit}
        style={{ width: 300, margin: "0 auto", padding: 30 }}
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="on"
            required
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="on"
            required
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <small style={{ color: "red" }}>{response}</small>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}