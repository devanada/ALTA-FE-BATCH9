import React, { Component } from "react";

import { ButtonSecondary, ButtonPrimary } from "./Button";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full p-4 bg-alta-primary sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
          <h1 className="text-white font-mukta">Rata Alada</h1>
          <ButtonPrimary label="Button" />
          <ButtonSecondary label="Button" />
        </nav>
        <div className="w-full h-full">{this.props.children}</div>
        <footer>
          <h1>BYE-BYE</h1>
        </footer>
      </div>
    );
  }
}

export default Layout;
