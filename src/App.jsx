// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewReleases from "./components/NewReleases";
import WhatsHot from "./components/WhatsHot";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/new" element={<NewReleases />} />
        <Route path="/hot" element={<WhatsHot />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
