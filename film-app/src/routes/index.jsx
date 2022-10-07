import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages";
import Detail from "../pages/DetailMovie";
import Example from "../pages/Example";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id_movie" element={<Detail />} />
        <Route path="/sandbox" element={<Example />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
