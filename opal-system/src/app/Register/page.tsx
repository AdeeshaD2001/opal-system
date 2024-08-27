"use client";

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
    email: '',
    name: '',
    password: '',
};

const SignUp = () => {
    const [formData, setFormData] = useState(defaultFormData)
  
    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =  async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault(); 

        try{
            console.log(formData);}
        catch(error){
            console.log(error);}
        finally {
            setFormData(defaultFormData);
        }
    };



  return (
    <section className='container mx-auto'>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[30%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <FaFacebook className="mr-3 text-4xl cursor-pointer text-blue" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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

            <div className="flex justify-center items-center">
                <button 
                    type="submit"                
                    className="bg-[#6b4f4f] text-white rounded h-9 px-4 mt-4 md:mt-0 transition duration-300 ease-in-out hover:bg-[#5a3e3e] w-full">
                    Sign Up
                </button>
            </div>

            <div className="flex justify-center">
              <button className= "text-blue-700 underline">Already have an account?</button>
            </div>

        </form>

      </div>
    </section>
  );
};

export default SignUp;