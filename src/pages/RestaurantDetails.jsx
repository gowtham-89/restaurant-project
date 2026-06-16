import {
  useParams
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import api from "../services/api";

function RestaurantDetails() {

  const { id } =
    useParams();

  const [restaurant,
    setRestaurant] =
      useState(null);

  useEffect(() => {

    getRestaurant();

  }, []);

  async function getRestaurant() {

    const response =
      await api.get(
        `/restaurants/${id}`
      );

    setRestaurant(
      response.data
    );
  }

  if (!restaurant) {

    return (
      <h2>Loading...</h2>
    );

  }

  return (
    <div className="details">

      <img
        src={restaurant.image}
        alt={restaurant.name}
      />

      <h1>
        {restaurant.name}
      </h1>

      <p>
        {restaurant.description}
      </p>

      <h3>Location</h3>
      <p>
        {restaurant.location}
      </p>

      <h3>Cuisine</h3>
      <p>
        {restaurant.cuisine}
      </p>

      <h3>Timing</h3>
      <p>
        {restaurant.timing}
      </p>

      <h3>Rating</h3>
      <p>
        ⭐ {restaurant.rating}
      </p>

      <h3>Average Cost</h3>
      <p>
        ₹ {restaurant.price}
      </p>

      <h3>Speciality</h3>
      <p>
        {restaurant.speciality}
      </p>

    </div>
  );
}

export default RestaurantDetails;