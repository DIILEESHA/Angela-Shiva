import { useState, useEffect } from "react";
import "./cc.css";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 9 Feb 2026, midnight in Asia/Kolkata timezone
    const targetDate = new Date("2026-02-09T00:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cca">
      <div className="cca_sub">
        <div className="cca_img">
          <img
            src="https://i.imgur.com/6jjTGgF.jpeg"
            alt=""
            className="cc_img"
          />
        </div>
        <h2 className="cca_time">{timeLeft.days}</h2>
        <h2 className="cca_times">Days</h2>
      </div>

      <div className="cca_sub">
        <div className="cca_img">
          <img
            src="https://i.imgur.com/ykfmZjp.jpeg"
            alt=""
            className="cc_img"
          />
        </div>
        <h2 className="cca_time">{timeLeft.hours}</h2>
        <h2 className="cca_times">Hours</h2>
      </div>

     

      <div className="cca_sub">
        <div className="cca_img">
          <img
            src="https://i.imgur.com/wqHdqSM.jpeg"
            alt=""
            className="cc_img"
          />
        </div>
        <h2 className="cca_time">{timeLeft.seconds}</h2>
        <h2 className="cca_times">Seconds</h2>
      </div>
    </div>
  );
};

export default Counter;
