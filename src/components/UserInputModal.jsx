import React, { useState } from "react";

const UserInputModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  const handleSave = () => {
    // Validate input, you can add more validation logic here
    if (name.trim() === "" || organization.trim() === "") {
      // You can show an error message here if needed
      return;
    }

    // Call the onSave callback with the input data
    onSave({
      name,
      organization,
      otherInfo,
    });

    // Clear the input fields
    setName("");
    setOrganization("");
    setOtherInfo("");

    // Close the modal
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Organization:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Your Organization"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Other Information:</label>
          <textarea
            className="w-full border border-gray-300 rounded-md py-2 px-3 h-32"
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
            placeholder="Additional information..."
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInputModal;


