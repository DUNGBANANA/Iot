// App.js
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import { privateRoutes, publicRoutes } from "./routes";
import { AuthProvider, useAuth } from "./features/AuthContext";

function App() {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <BrowserRouter>
      <AuthProvider> {/* Đảm bảo AuthProvider bao bọc toàn bộ ứng dụng */}
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                // user ? (
                  <route.layout>
                    <route.component />
                  </route.layout>
                // ) : (
                //   <Navigate to="/" replace={true} />
                // )
              }
            />
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
