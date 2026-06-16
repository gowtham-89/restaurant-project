import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addFavorite
} from "../features/favoriteSlice";

function RestaurantCard({
  restaurant,
  onDelete
}) {

  const dispatch =
    useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(
        restaurant
      )
    );

  }

  return (
    <div className="card">

      <img
        src={restaurant.image}
        alt={restaurant.name}
      />

      <h3>
        {restaurant.name}
      </h3>

      <p>
        {restaurant.location}
      </p>

      <p>
        {restaurant.cuisine}
      </p>

      <p>
        ⭐ {restaurant.rating}
      </p>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/restaurants/${restaurant.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-restaurant/${restaurant.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(
              restaurant.id
            )
          }
        >
          Delete
        </button>

      </div>

      <button
        className="favorite-btn"
        onClick={
          handleFavorite
        }
      >
        ❤ Favorite
      </button>

    </div>
  );
}

export default RestaurantCard;