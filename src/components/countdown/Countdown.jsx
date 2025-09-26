import { useState, useEffect } from "react";
import "./c.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Wedding date in IST (India Standard Time)
      const weddingDate = new Date("2026-02-09T00:00:00+05:30");

      // Current time converted to IST
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: days.toString().padStart(3, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // initial run

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="master mind">
      <div className="schedule_container pala">
        <div className="dolly">
          <div className="tcx">
            <h2 className="sc_title">Let the countdown begin</h2>
          </div>

          <div className="sc_grid">
            <div className="sc_sub">
              <h2 className="sc_time ball">{timeLeft.days}</h2>
              <h2 className="event">Days</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time ball">{timeLeft.hours}</h2>
              <h2 className="event">Hours</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time ball">{timeLeft.minutes}</h2>
              <h2 className="event">Minutes</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time ball">{timeLeft.seconds}</h2>
              <h2 className="event">Seconds</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
