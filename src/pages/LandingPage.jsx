import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiArrowDownCircle, FiLock, FiCheckCircle, FiShield } from "react-icons/fi"; 
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
   const [isConnected, setIsConnected] = useState(false);
   const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${require("../assets/bg.jpeg")})`,
      }}
    >
      <Navbar onClick={() => {
          navigate("/join");
       }}/>

      {/* Hero Section */}
      <section className="text-white text-center py-20 h-[300px] mt-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to VeriDeApp
        </h1>
        <p className="text-lg mb-8">
          Your trusted platform for attestation and verification.
        </p>
      </section>
          
      {/* About Section */}
      <section className="bg-transparent text-white my-5 py-16 w-full mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
          <p className="text-xl">
            VeriDeApp is a privacy-focused platform that allows you to prove qualifications and attendance at events without revealing sensitive details. Our secure attestation system ensures your data is protected while providing trusted verification.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white text-gray-800 py-20 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-10">Key Features</h2>
          {/* Feature Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature Card 1 */}
            <div className="p-8 border rounded-lg shadow-lg bg-white w-[300px]">
              {/* Icon */}
              <div className="mb-4 text-blue-400 text-4xl">
                <FiLock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy-Focused Attestations</h3>
              <p className="text-gray-600">
                 Protect your personal information with our privacy-focused attestation system.
              </p>
            </div>
            
             {/* Feature Card 2 */}
            <div className="p-8 border rounded-lg shadow-lg bg-white w-[300px]">
              {/* Icon */}
              <div className="mb-4 text-blue-400 text-4xl">
                <FiCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Verification Process</h3>
              <p className="text-gray-600">
                 Easily verify qualifications and event attendance without hassle.
              </p>
            </div>
              
             {/* Feature Card 3 */}
            <div className="p-8 border rounded-lg shadow-lg bg-white w-[300px]">
              {/* Icon */}
              <div className="mb-4 text-blue-400 text-4xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Blockchain Technology</h3>
              <p className="text-gray-600">
                 Utilizing blockchain technology for maximum security and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-20 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8">
            Join us and experience the future of verification.
          </p>
          <button className="bg-white text-blue-400 hover:bg-blue-600 hover:text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            connect wallet
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 w-full">
        <p>&copy; 2023 VeriDeApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
