import React from "react";
import "./header.css";

function Header({ darkModeHandle, darkMode }) {
  return (
    <div
      className={
        darkMode ? "header__container light" : "header__container dark"
      }
    >
      <h1>Where in the world?</h1>
      <div className="">
        <h1 onClick={() => darkModeHandle()}>Dark Mode</h1>
      </div>
    </div>
  );
}

export default Header;
