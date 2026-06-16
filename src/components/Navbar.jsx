import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const favorites =
    useSelector(
      state => state.favorites
    );

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/restaurants">
        Restaurants
      </Link>

      <Link to="/favorites">
        Favorites (
        {favorites.length}
        )
      </Link>

      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>

          <Link to="/login">
            Login
          </Link>
        </>
      )}

      {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}

    </nav>
  );
}

export default Navbar;