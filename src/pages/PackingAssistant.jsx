import React, { useState } from "react";

const PackingAssistant = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    weather: "",
    activities: "",
  });

  const [loading, setLoading] = useState(false);
  const [packingList, setPackingList] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPackingList("");

    try {
      const response = await fetch("/api/generate-packing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPackingList(data.packingList || "No packing list generated.");
    } catch (error) {
      setPackingList("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">AI Packing Assistant</h1>

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

        <div>
          <label className="block mb-1 font-medium text-gray-700">Trip Duration (in days)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Expected Weather</label>
          <input
            type="text"
            name="weather"
            value={formData.weather}
            onChange={handleChange}
            placeholder="e.g., cold, rainy, sunny"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Activities (comma separated)</label>
          <input
            type="text"
            name="activities"
            value={formData.activities}
            onChange={handleChange}
            placeholder="e.g., hiking, swimming, formal dinners"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          {loading ? "Generating..." : "Generate Packing List"}
        </button>
      </form>

      {packingList && (
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your AI-Powered Packing List:</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{packingList}</pre>
        </div>
      )}
    </div>
  );
};

export default PackingAssistant;