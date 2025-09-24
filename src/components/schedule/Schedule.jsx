import React from "react";
import "./sc.css";
const Schedule = () => {
  return (
    <div className="master">
      <div className="schedule_container">
        <div className="dolly">
          <h2 className="sc_title">Here's a sneak peek of</h2>

          <h1 className="sc">our special day's schedule</h1>

          <div className="sc_grid guu">
            <div className="sc_sub">
              <h2 className="sc_time">
                <span style={{ fontSize: "30px" }}>7th</span>
                <br />
                Feb 1pm
              </h2>
              <h2 className="event">Mehndi</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time">
                <span style={{ fontSize: "30px" }}>7th</span>
                <br />
                Feb 8pm
              </h2>
              <h2 className="event">Sangeet</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">
                <span style={{ fontSize: "30px" }}>8th</span>
                <br />
                Feb 12:30pm
              </h2>
              <h2 className="event">Haldi</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">
                <span style={{ fontSize: "30px" }}>8th</span>
                <br />
                Feb 8pm
              </h2>
              <h2 className="event">Baraat & Varmala</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time">
                <span style={{ fontSize: "30px" }}>8th</span>
                <br />
                Feb 8pm
              </h2>
              <h2 className="event">Baraat & Varmala</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
