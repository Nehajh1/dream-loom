import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateDreamPage from "./Pages/CreateDreamPage";
import GalleryPage from "./Pages/GalleryPage";
import ProfilePage from "./Pages/ProfilePage";
import DreamDetailPage from "./Pages/DreamDetailPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateDreamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dream/:id" element={<DreamDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
