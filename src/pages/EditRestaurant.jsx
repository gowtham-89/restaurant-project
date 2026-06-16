import { useEffect } from "react";
import { useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import api from "../services/api";

function EditRestaurant() {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
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

  useEffect(() => {

    getRestaurant();

  }, []);

  async function getRestaurant() {

    const response =
      await api.get(
        `/restaurants/${id}`
      );

    setFormData(
      response.data
    );

  }

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.put(
      `/restaurants/${id}`,
      formData
    );

    navigate("/restaurants");

  }

  return (
    <div className="form-container">

      <h2>
        Update Restaurant
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="timing"
          value={formData.timing}
          onChange={handleChange}
        />

        <input
          type="text"
          name="speciality"
          value={formData.speciality}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button
          className="submit-btn"
        >
          Update Restaurant
        </button>

      </form>

    </div>
  );
}

export default EditRestaurant;