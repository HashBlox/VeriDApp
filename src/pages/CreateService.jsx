import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // You can use this for the "Add More Services" button.
import Navbar from "../components/Navbar";

const CreateService = () => {
  const [userServices, setUserServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user services from localStorage when the component mounts.
    const storedUserServices = JSON.parse(localStorage.getItem("userServices")) || [];
    setUserServices(storedUserServices);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Save user services to localStorage whenever it changes.
    localStorage.setItem("userServices", JSON.stringify(userServices));
  }, [userServices]);

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${require("../assets/bg.jpeg")})` }}>
      <Navbar />

      <div className="container mx-auto py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">My Services and Events</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : userServices.length === 0 ? (
          <p>No services or events created yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userServices.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">{service.name}</h2>
                <p className="text-gray-200">{service.description}</p>
              </div>
            ))}
          </div>
        )}

        <Link to="/newid" className="mt-12 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300">
          Add New ID
        </Link>
      </div>
    </div>
  );
};

export default CreateService;
