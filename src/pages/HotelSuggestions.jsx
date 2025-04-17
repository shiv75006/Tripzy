import React, { useState } from "react";

const HotelSuggestions = () => {
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    preferences: "",
    travelDates: "",
  });

  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestions("");

    try {
      const response = await fetch("/api/generate-hotel-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setSuggestions(data.suggestions || "No suggestions available.");
    } catch (error) {
      setSuggestions("An error occurred while fetching suggestions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">AI Hotel Suggestions</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Travel Dates</label>
          <input
            type="text"
            name="travelDates"
            placeholder="e.g., May 1 - May 7"
            value={formData.travelDates}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Budget (in USD)</label>
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
          <label className="block mb-1 font-medium text-gray-700">Preferences</label>
          <input
            type="text"
            name="preferences"
            placeholder="e.g., near beach, family friendly, spa"
            value={formData.preferences}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Get Hotel Suggestions"}
        </button>
      </form>

      {suggestions && (
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">AI Hotel Recommendations:</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{suggestions}</pre>
        </div>
      )}
    </div>
  );
};

export default HotelSuggestions;