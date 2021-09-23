import React from "react";
import Switch from "react-switch";
import { FaHeart, FaBars } from "react-icons/fa";
import reactLogo from "./assets/logo.svg";

const Main = ({
  collapsed,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleImageChange,
}) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> React Sidebar
        </h1>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span>بستن</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span>تصویر پس زمینه</span>
      </div>

      <footer>
        <small>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hossein-heydari79"
          >
            Hossein Heydari
          </a>©
        </small>
        <br />
      </footer>
    </main>
  );
};

export default Main;
