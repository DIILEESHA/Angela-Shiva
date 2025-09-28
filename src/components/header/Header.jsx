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
          <h2 className="date">09 · 02 · 2026</h2>
        </div>
        <div className="header_sub ty">
          <video
            // src={video}
            src="https://i.imgur.com/6N5tQOA.mp4"
            className="header_img nasiya"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="header_sub jur">
          <video
            // src={videoss}
            src="https://i.imgur.com/r6Hc0ys.mp4"
            className="header_img pasiya"
            autoPlay
            loop
            muted
            playsInline
          />
   
        </div>
        <div className="header_sub ty">
          <video
            // src={videos}
            src="https://i.imgur.com/uW5Eco8.mp4"
            className="header_img nasiya"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
       <p className="header_p sagi hg">
            Sa huli palagi, babalik pa rin sa yakap mo
            <br />
            Hanggang sa huli palagi, pipiliin kong maging sa'yo
            <br />
            Ulit-ulitin man, nais kong malaman mong
            <br />
            Iyo ako
          </p>
      <div className="naughty">
        <div className="naughty_sub">
          <video
            // src={videos}
            src="https://i.imgur.com/6N5tQOA.mp4"
            className="naughty_img"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="naughty_sub">
          <video
            // src={video}
            src="https://i.imgur.com/uW5Eco8.mp4"
            className="naughty_img"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

       <p className="header_p pagi hg">
            Sa huli palagi, babalik pa rin sa yakap mo
            <br />
            Hanggang sa huli palagi, pipiliin kong maging sa'yo
            <br />
            Ulit-ulitin man, nais kong malaman mong
            <br />
            Iyo ako
          </p>
    </div>
  );
};

export default Header;
