import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {

  const [restaurants, setRestaurants] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [cuisine, setCuisine] =
    useState("All");

  const [sort, setSort] =
    useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {

    try {

      const response =
        await api.get("/restaurants");

      setRestaurants(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  async function deleteRestaurant(id) {

    await api.delete(
      `/restaurants/${id}`
    );

    setRestaurants(
      restaurants.filter(
        restaurant =>
          restaurant.id !== id
      )
    );
  }

  const filteredRestaurants =
    restaurants.filter(
      restaurant => {

        const searchMatch =
          restaurant.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const cuisineMatch =
          cuisine === "All" ||
          restaurant.cuisine ===
            cuisine;

        return (
          searchMatch &&
          cuisineMatch
        );
      }
    );

  let finalRestaurants =
    [...filteredRestaurants];

  if (sort === "high") {

    finalRestaurants.sort(
      (a, b) =>
        b.rating - a.rating
    );

  }

  if (sort === "low") {

    finalRestaurants.sort(
      (a, b) =>
        a.rating - b.rating
    );

  }

  return (
    <div>

      <h1>
        Restaurants
      </h1>

      <Link
        className="add-btn"
        to="/add-restaurant"
      >
        Add Restaurant
      </Link>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Restaurant"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={cuisine}
          onChange={(e) =>
            setCuisine(
              e.target.value
            )
          }
        >
          <option>
            All
          </option>

          <option>
            Indian
          </option>

          <option>
            Chinese
          </option>

          <option>
            Italian
          </option>

          <option>
            Mexican
          </option>

        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value
            )
          }
        >

          <option value="">
            Sort Rating
          </option>

          <option value="high">
            High To Low
          </option>

          <option value="low">
            Low To High
          </option>

        </select>

      </div>

      <div className="restaurants">

        {finalRestaurants.map(
          restaurant => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onDelete={
                deleteRestaurant
              }
            />
          )
        )}

      </div>

    </div>
  );
}

export default Restaurants;