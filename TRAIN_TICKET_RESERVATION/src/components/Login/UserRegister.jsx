import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    // Fetch existing users or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists. Please login instead.");
      navigate("/login");
    } else {
      // Add new user to users list
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Auto-login after registration
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registration successful! You are now logged in.");
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-8 shadow-md rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">User Registration</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="Create a Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300"
          >
            REGISTER
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/login" className="text-violet-600 hover:underline">
            Already have an account? Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
