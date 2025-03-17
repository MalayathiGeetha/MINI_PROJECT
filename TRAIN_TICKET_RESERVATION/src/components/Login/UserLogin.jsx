import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists and credentials are correct
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      // Store current user data to localStorage
      localStorage.setItem("user", JSON.stringify(validUser));
      alert("Login Successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-8 shadow-md rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">User Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="text"
              name="email"
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
              name="password"
              placeholder="Enter Your Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white p-2 rounded hover:bg-violet-700 transition duration-300"
          >
            LOGIN
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/register" className="text-violet-600 hover:underline">
            New User? Register here
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
