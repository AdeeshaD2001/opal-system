import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Main Content */}
      <main className="flex-grow container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/images/contact-illustration.png" alt="Contact Us Illustration" className="w-full max-w-md" />
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">We’ll soon try to contact you.</p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            />
            <button type="submit"
                    className="w-full bg-[#6b4f4f] text-white py-2 rounded transition duration-300 ease-in-out hover:bg-[#5a3e3e]">
            </button>
          </form>
        </div>
      </main>

      
    </div>
  );
};

export default Contact;
