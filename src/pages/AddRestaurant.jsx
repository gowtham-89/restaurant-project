import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddRestaurant() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      location: "",
      cuisine: "",
      image: "",
      description: "",
      rating: "",
      price: "",
      timing: "",
      speciality: ""
    });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.post(
      "/restaurants",
      formData
    );

    navigate("/restaurants");

  }

  return (
    <div className="form-container">

      <h2>Add Restaurant</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          type="text"
          name="timing"
          placeholder="Timing"
          onChange={handleChange}
        />

        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button
          className="submit-btn"
        >
          Add Restaurant
        </button>

      </form>

    </div>
  );
}

export default AddRestaurant;