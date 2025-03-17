import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name || "User"}!</h1>
      <p className="text-lg">Email: {user?.email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
