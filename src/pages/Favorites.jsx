import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch =
    useDispatch();

  const favorites =
    useSelector(
      state => state.favorites
    );

  return (
    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Restaurants
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Restaurants
            </h2>

            <p>
              Add restaurants from
              Restaurants page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(
                restaurant => (

                  <div
                    key={restaurant.id}
                    className="favorite-card"
                  >

                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                    />

                    <div className="favorite-content">

                      <h2>
                        {restaurant.name}
                      </h2>

                      <p>
                        📍 {restaurant.location}
                      </p>

                      <p>
                        🍽 {restaurant.cuisine}
                      </p>

                      <p>
                        ⭐ {restaurant.rating}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(
                            removeFavorite(
                              restaurant.id
                            )
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                )
              )
            }

          </div>

        )
      }

    </div>
  );
}

export default Favorites;