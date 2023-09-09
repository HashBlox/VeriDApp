import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // You can use these icons for verification status.

const VerifyIDPage = () => {
  const [verificationStatus, setVerificationStatus] = useState("pending");

  const handleVerify = () => {
    // Simulate a verification process (you can replace this with actual verification logic).
    setVerificationStatus("verifying");

    setTimeout(() => {
      // Simulate success or failure.
      const isSuccess = Math.random() < 0.5;
      setVerificationStatus(isSuccess ? "verified" : "failed");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${require("../assets/bg.jpeg")})` }}>
      <Navbar />

      <div className="container mx-auto py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Verify Your ID</h1>

        {verificationStatus === "pending" && (
          <div>
            <p className="text-xl mb-4">Click the button below to start the verification process:</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
              onClick={handleVerify}
            >
              Verify ID
            </button>
          </div>
        )}

        {verificationStatus === "verifying" && (
          <div>
            <p className="text-xl mb-4">Verifying your ID...</p>
            <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
          </div>
        )}

        {verificationStatus === "verified" && (
          <div>
            <FaCheckCircle className="text-6xl text-green-500 mb-4" />
            <p className="text-xl">Your ID has been successfully verified!</p>
          </div>
        )}

        {verificationStatus === "failed" && (
          <div>
            <FaExclamationCircle className="text-6xl text-red-500 mb-4" />
            <p className="text-xl">Verification failed. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyIDPage;
