import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // v10+
import "swiper/css";
import "swiper/css/pagination";
import "./sc.css";

const events = [
  { dateBig: "7th", dateLine: "Feb 1pm", title: "Mehndi" },
  { dateBig: "7th", dateLine: "Feb 8pm", title: "Sangeet" },
  { dateBig: "8th", dateLine: "Feb 12:30pm", title: "Haldi" },
  { dateBig: "8th", dateLine: "Feb 8pm", title: "Baraat & Varmala" },
  { dateBig: "9th", dateLine: "Feb 1am", title: "Phera’s" },
];

const Schedule = () => {
  return (
    <div className="master">
      <div className="schedule_container">
        <div className="dolly">
          <h2 className="sc_title">Here's a sneak peek of</h2>
          <h1 className="sc">our special day's schedule</h1>

          {/* Desktop Grid (hidden on small devices) */}
          {/* <div className="sc_grid guu desktop-grid">
            {events.map((ev, idx) => (
              <div className="sc_sub " key={idx}>
                <h2 className="event">{ev.title}</h2>
                <br />
                <br />
                <h2 className="sc_time">
                  <span style={{ fontSize: "30px" }}>{ev.dateBig}</span>
                  <br />
                  {ev.dateLine}
                </h2>
              </div>
            ))}
          </div> */}

          {/* Mobile Swiper (hidden on larger devices) */}
          <div className="mobile-swiper">
           <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={20}
  slidesPerView={1}   // ✅ always define a default
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: {
      slidesPerView: 1, // small phones
    },
    768: {
      slidesPerView: 2, // tablets
    },
    1024: {
      slidesPerView: 5, // desktops
    },
  }}
>
  {events.map((ev, idx) => (
    <SwiperSlide key={idx}>
      <div className="sc_sub slide-sub">
        <h2 className="event">{ev.title}</h2>
        <br />
        <h2 className="sc_time">
          <span style={{ fontSize: "30px" }}>{ev.dateBig}</span>
          <br />
          {ev.dateLine}
        </h2>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
