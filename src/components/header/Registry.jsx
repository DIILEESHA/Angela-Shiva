import React from "react";
import "./r.css";
import { Link } from "react-router-dom";
const Registry = () => {
  return (
    <div className="registry_container">
      <div className="r_grid">
        <div className="r_sub">
          <h2 className="r_title">The Events</h2>
          <div class="image-wrapper vt">
            <video
              // src={videos}
              src="https://i.imgur.com/uW5Eco8.mp4"
              className="r_img"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <p className="jio">
            From colors and cocktails to dhol beats and vows — gear up for five
            epic moments as we blend two cultures into one big celebration of
            love.
          </p>
          <button className="rsvp_btn">
            <Link
              to="/wedding-events"
              style={{
                color: "#000",

                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Wedding Events
            </Link>
          </button>
        </div>
        <div className="r_sub">
          <h2 className="r_title">What to wear</h2>
          <div class="image-wrapper vt">
            {/* <img
              src="https://ik.imagekit.io/fh2hj1ayv/Website%20dress%20code.jpg?updatedAt=1747553148257"
              alt=""
              /> */}

            <video
              // src={videos}
              src="https://i.imgur.com/6N5tQOA.mp4"
              className="r_img"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <p className="jio">
            We’ve put together a style guide to help you find inspiration and
            feel confident in what you wear as we celebrate this special day of
            love together.
          </p>
          <button className="rsvp_btn">
            <Link
              to="/dress"
              style={{
                color: "#000",

                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Dress Code
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
