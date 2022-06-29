import React from "react";
import "./Header.css";
import heart from "../../Images/heart.png";

function Header() {
  return (
    <div className="top-container">
      <img className="toppic" src={heart} alt="heart-img" />
      <h1>Shamika Crafts</h1>
      <h3>Crafting Your Curiosity, Adorning Your Feelings</h3>
      <img className="bottompic" src={heart} alt="heart-img" />
    </div>
  );
}

export default Header;
