import { useState } from "react";

import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [login, setLogin] = useState(null);

  return (
    <div className="h-screen w-screen bg-[#0198A5] md:bg-[#B4EDF2] flex justify-center items-center">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              login ? <Home setLogin={setLogin} /> : <Navigate to="/login" />
            }
          ></Route>
          <Route
            path="/login"
            element={
              !login ? <Login setLogin={setLogin} /> : <Navigate to="/" />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
