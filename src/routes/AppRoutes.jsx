import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import RestaurantDetails from "../pages/RestaurantDetails";
import AddRestaurant from "../pages/AddRestaurant";
import EditRestaurant from "../pages/EditRestaurant";
import Favorites from "../pages/Favorites";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/restaurants"
        element={<Restaurants />}
      />

      <Route
        path="/restaurants/:id"
        element={
          <RestaurantDetails />
        }
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />

      <Route
        path="/add-restaurant"
        element={
          <ProtectedRoute>
            <AddRestaurant />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-restaurant/:id"
        element={
          <ProtectedRoute>
            <EditRestaurant />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;