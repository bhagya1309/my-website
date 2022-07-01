import React from "react";
import "./MainHeader.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

function MainHeader() {
  return (
    <header className="main-header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="shamika-logo" />
      </Link>
      <div className="header__nav">
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">About</span>
          <span className="header__optionLineTwo">Us</span>
        </div>
        <Link to="/">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
