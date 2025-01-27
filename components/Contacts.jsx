import React, { useState } from "react";

 export const Contacts = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your feedback!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="w-full h-[100vh] pt-[8vw]">
    <div className="w-[75vw] mx-auto p-6 bg-[white] rounded-lg shadow-md">
      <h2 className="text-5xl font-bold text-[orange] mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="py-[2vw]">
          <label
            htmlFor="email"
            className="block text-[1.4vw] font-bold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300  outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your Name"
          />
        </div>

        {/* Password Field */}
        <div className="">
          <label
            htmlFor="password"
            className="block text-[1.4vw] font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="  email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none sm:text-sm"
            placeholder="Enter your Email"
          />
        </div>

        {/* Feedback Field */}
        <div className="py-[2vw]">
          <label
            htmlFor="feedback"
            className="block text-[1.4vw] font-bold text-gray-700"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Share your feedback"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[40vw] ml-52 bg-[orange] text-white py-2 px-4 font-bold rounded-md hover:bg-white hover:text-[orange] border hover:border-[orange] focus:outline-none "
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contacts;
