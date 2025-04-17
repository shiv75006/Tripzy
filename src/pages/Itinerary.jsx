import React, { useState } from "react";

const CreateItinerary = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    preferences: "",
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setItinerary("");

    try {
      const response = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setItinerary(data.itinerary || "No itinerary generated.");
    } catch (error) {
      setItinerary("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your AI-Powered Travel Itinerary</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Budget </label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Preferences (e.g. food, adventure, relaxation)</label>
          <textarea
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Tell us what kind of experiences you're looking for..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
      </form>

      {itinerary && (
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your AI-Powered Itinerary:</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{itinerary}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateItinerary;