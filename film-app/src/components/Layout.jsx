import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ButtonSecondary, ButtonPrimary } from "./Button";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full p-4 bg-alta-primary sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
          <Link to="/">
            <h1 className="text-white font-mukta">Rata Alada</h1>
          </Link>
          <div className="space-x-4">
            <Link to="/sandbox">
              <ButtonPrimary label="Sandbox" />
            </Link>
            <Link to="/favorites">
              <ButtonSecondary label="My Favorite" />
            </Link>
          </div>
        </nav>
        <div className="w-full h-full">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
