import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Welcome from "./pages/Welcome";
import Register from "./pages/users/Register";
import Login from "./pages/users/Login";
import Products from "./pages/products/Products";
import Profile from "./pages/users/Profile";
import ProductsForm from "./pages/products/ProductsForm";
import ProductDetails from "./pages/products/ProductDetails";
import Navbar from "./components/Navbar";
import jwt_decode from "jwt-decode";
import "./App.css";

function App() {
  // the currently logged in user will be stored in state
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect -- if the user navigates away from the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem("jwt");
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token));
    } else {
      setCurrentUser(null);
    }

    // if so, we will decode it and set the user in app state
  }, []);
  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem("jwt")) {
      // if so, delete
      localStorage.removeItem("jwt");
      // set the user in app state to null
      setCurrentUser(null);
    }
  };
  return (
    <Router>
      <header>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Welcome
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          {/* TODO: conditionally render auth locked routes */}
          <Route
            path="/profile"
            element={
              currentUser ? (
                <Profile
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                  setCurrentUser={setCurrentUser}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/products"
            element={<Products currentUser={currentUser} />}
          />
          <Route
            path="/products/new"
            element={
              <ProductsForm
                initialForm={{ name: "", price: 0, description: "" }}
                productId={null}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails currentUser={currentUser} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
