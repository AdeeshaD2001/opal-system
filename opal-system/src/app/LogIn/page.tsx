"use client";

import React, { useState } from "react";

const defaultFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 text-black rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#836666]";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log("Logging in with:", formData);
      // Here you would typically handle the login process, such as calling an API.
    } catch (error) {
      console.log("Error during login:", error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#836666] mb-2">Log In</h1>
          <p className="text-gray-500">
            Welcome back! Please log in to your account.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-[#6b4f4f] text-white rounded-lg py-3 transition duration-300 ease-in-out hover:bg-[#5a3e3e]"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center space-y-2">
          <button className="text-gray-700 underline hover:text-black">
            Forgot Password?
          </button>
          <button className="text-blue-700 underline hover:text-blue-900">
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
