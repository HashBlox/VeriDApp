import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CreateNewIDPage = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields here (e.g., check if they are not empty).

    // Simulate submission (you can replace this with your actual submission logic).
    setIsSubmitting(true);

    setTimeout(() => {
      // Simulate success or failure.
      const isSuccess = Math.random() < 0.5;
      setIsSubmitting(false);

      if (isSuccess) {
        // Redirect to a success page or take other actions.
        // For now, we'll clear the form fields.
        setEventName("");
        setEventDate("");
        setEventLocation("");
      }
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${require("../assets/bg.jpeg")})` }}>
      <Navbar />

      <div className="container mx-auto py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Create New Attestation</h1>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">Event Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">Event Date:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">Event Location:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="Event Location"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Attestation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewIDPage;
