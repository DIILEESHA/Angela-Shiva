import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="exact_date">
          <h2 className="date">08 · 02 · 2026</h2>
        </div>
        <div className="header_sub ty">
          <img
            alt=""
            className="header_img nasiya"
            src="https://i.imgur.com/9odwY2h.jpeg"
          />
        </div>
        <div className="header_sub jur">
          <img
            src="https://i.imgur.com/Gv4sdsB.jpeg"
            alt=""
            className="header_img pasiya"
          />

          <p className="header_p hg">
            Celebrating every chapter that brought us here… as our forever
            begins now
          </p>
        </div>
        <div className="header_sub ty">
          <img
            src="https://i.imgur.com/AXpgvPB.jpeg"
            alt=""
            className="header_img nasiya"
          />
        </div>
      </div>

      <div className="naughty">
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/9odwY2h.jpeg"
            alt=""
            className="naughty_img"
          />
        </div>
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/AXpgvPB.jpeg"
            alt=""
            className="naughty_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
