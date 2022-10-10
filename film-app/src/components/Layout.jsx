import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ButtonSecondary, ButtonPrimary } from "./Button";
import { ThemeContext } from "utils/context";

const Layout = ({ children }) => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <div className="w-full h-screen">
      <nav className="w-full p-4 bg-alta-primary sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-mukta">Rata Alada</h1>
        </Link>
        <div className="space-x-4">
          <ButtonPrimary
            label={isLight ? "Light Mode" : "Dark Mode"}
            onClick={() => setIsLight(!isLight)}
          />
          <Link to="/favorites">
            <ButtonSecondary label="My Favorite" />
          </Link>
        </div>
      </nav>
      <div className="w-full h-full bg-white dark:bg-black overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
