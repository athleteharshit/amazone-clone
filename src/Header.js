import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    //    { 1. logo and link}
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      {/* {2. search box} */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchRoundedIcon className="header__searchIcon" />
      </div>

      {/* {3. Links} */}
      <div className="header__nav">
      {/* {1, Link } */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

      {/* {2, Link } */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Order</span>
          </div>
        </Link>

      {/* {3, Link } */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

      {/* {4. Link } */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
      </div>
    </nav>
  );
}

export default Header;
