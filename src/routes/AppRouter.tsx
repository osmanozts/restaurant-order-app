import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignInPage } from "../pages";
import { useEffect, useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("accessToken")! ? true : false
  );

  useEffect(() => {
    window.addEventListener("storage", () => {
      if (window.localStorage.getItem("accessToken")!) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  function handleLogOut() {
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/*"
            element={<PrivateRoutes onLogOut={handleLogOut} />}
          />
        ) : (
          <Route path="/signIn" element={<SignInPage />} />
        )}

        <Route path="*" element={<Navigate to="/signIn" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
