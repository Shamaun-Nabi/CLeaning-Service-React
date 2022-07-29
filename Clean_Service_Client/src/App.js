import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.Component />}
            />
          ))}
        </Routes>
      </Navbar>
    </>
  );
}
export default App;
