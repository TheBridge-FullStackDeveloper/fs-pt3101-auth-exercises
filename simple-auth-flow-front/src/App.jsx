import './App.sass';
import AuthContext from "./context/authContext";
import { useState } from "react";
import * as authService from "./services/auth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    logoutUser={authService.logoutUser}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <Register
                  registerUser={authService.registerUser}
                  loginUser={authService.loginUser}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

{/* <Route
              path="/"
              element={
                <ProtectedRoute>
                <>
                  <Header />
                  <div>Home page</div>
                  <Footer />
                  </>
              </ProtectedRoute>
              }
            /> */}