import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/register/", formData);

      if (response.status === 201) {
        // Registration successful
        setError(null);
        console.log("Registration success");
        onClose(); // Close the modal
      } else {
        // Handle registration errors
        setError("Registration failed");
      }
    } catch (error) {
      // Handle network errors
      setError("Network Error");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full px-3 py-2 mb-3 rounded-lg text-green-950"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-3 py-2 mb-3 rounded-lg text-green-950"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-3 py-2 mb-3 rounded-lg text-green-950"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button
        onClick={handleRegister}
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Sign-up
      </button>
    </>
  );
};

export default RegisterForm;
