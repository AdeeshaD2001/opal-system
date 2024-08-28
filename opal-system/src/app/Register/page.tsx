"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const SignUp = () => {
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
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold text-[#836666]">
            Create an Account
          </h1>
          <p className="text-gray-500">OR</p>
          <div className="flex space-x-3 mt-4">
            <FaFacebook className="text-4xl cursor-pointer text-blue-600 hover:scale-110 transition-transform" />
            <FcGoogle className="text-4xl cursor-pointer hover:scale-110 transition-transform" />
          </div>
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
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={inputStyles}
            value={formData.name}
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
            className="w-full bg-[#836666] text-white rounded-lg py-3 transition duration-300 ease-in-out hover:bg-[#5a3e3e]"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <button className="text-blue-700 underline hover:text-blue-900">
            <Link href="/LogIn">Already have an account? Sign In</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
