import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages";
import Detail from "../pages/DetailMovie";
import NotFound from "../pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
