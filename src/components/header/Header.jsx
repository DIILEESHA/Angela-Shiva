import React from "react";
import "./header.css";
import video from "../../assets/gifone.mp4";
import videos from "../../assets/giftwo.mp4";
import videoss from "../../assets/g4.mp4";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="exact_date">
          <h2 className="date">08 · 02 · 2026</h2>
        </div>
        <div className="header_sub ty">
          <video
            src={video}
            className="header_img nasiya"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="header_sub jur">
          <video
            src={videoss}
            className="header_img pasiya"
            autoPlay
            loop
            muted
            playsInline
          />
          <p className="header_p hg">
            Celebrating every chapter that brought us here… as our forever
            begins now
          </p>
        </div>
        <div className="header_sub ty">
          <video
            src={videos}
            className="header_img nasiya"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="naughty">
        <div className="naughty_sub">
          <video
            src={videos}
            className="naughty_img"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="naughty_sub">
                  <video
            src={video}
            className="naughty_img"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
