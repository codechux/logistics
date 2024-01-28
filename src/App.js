import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route from react-router-dom
import TrackPage from "./pages/TrackPage.jsx";
import Home from "./pages/Home.jsx";
import Request from "./pages/RequestForm.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/trackandtrace" element={<TrackPage />} />{" "}
        <Route path="/requestform" element={<Request />} />{" "}
        {/* Define routes using Route */}
      </Routes>
    </div>
  );
}

export default App;
