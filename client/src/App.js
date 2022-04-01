import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Verify from "./Verify/Verify";

import "./App.css";

function App() {
  const { isAuthenticated, isVerified } = useSelector((state) => state.user);

  function RequireAuth({ children, redirectTo }) {
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  function VerificationAuth({ children, redirectTo }) {
    return isVerified ? children : <Navigate to={redirectTo} />;
  }

  function LoginAuth({ children, redirectTo }) {
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/register"
            element={
              <LoginAuth redirectTo="/home">
                <SignUp />
              </LoginAuth>
            }
          />
          <Route
            path="/login"
            element={
              <LoginAuth redirectTo="/home">
                <SignIn />
              </LoginAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth redirectTo="/login">
                <VerificationAuth redirectTo="/verify">
                  <App />
                </VerificationAuth>
              </RequireAuth>
            }
          />
          <Route path="/verify" element={<Verify />} />
          {/* <Route path="network" element={<Network />} /> */}
          {/* <Route path="message" element={<Message />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="profileB" element={<ProfileB />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
