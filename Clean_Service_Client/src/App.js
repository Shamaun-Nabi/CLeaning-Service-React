import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import { Toaster } from "react-hot-toast";
import { privateRoute } from "./routes/privateRoute";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Navbar>
        <Routes>
          {publicRoute.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route element={<RequireAuth />}>
            {privateRoute.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}
export default App;
