
import gsap from "gsap";
import React, { useState } from "react";

export const Bookform = ({box}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // alert("Your table has been booked successfully!");
    setFormData({ name: "", phone: "", date: "", time: "", guests: 1 });
  };
  console.log(formData);
  
const hiddenBox=()=>{
  gsap.to(".box",{
    display:"none",
    duration:2
  })
}

const hiddenBox1=()=>{
  gsap.to(".box",{
    display:"none",
  delay:-2
  })
}

  return (
    <div className={`w-[25vw] ${box} mx-auto p-6 z-20 left-[37%] hidden top-[55%] bg-white text-[black]  backdrop-blur-[100vw] absolute mt-[-20vw] shadow-md rounded-lg`}>
      < h2 className="text-xl font-bold text-[orange] text-center mb-4">Book a Table</h2>
      <i onClick={()=>hiddenBox()} class="ri-close-circle-fill text-[orange] text-[2vw] absolute right-2 top-[.2vw] cursor-pointer"></i>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-[3px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

       

        <div>
          <label htmlFor="phone" className="block text-sm font-medium ">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-[3px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium ">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-[3px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium ">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-[3px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium ">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full px-4 py-[3px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
        onClick={()=>hiddenBox1()}
          type="submit"
          className="w-full bg-[orange] text-white py-[3px] px-4 rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Bookform;
