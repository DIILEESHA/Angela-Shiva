import "./l.css";

const Location = () => {
  return (
    <div className="header_container ui">
      <div className="header_grid two">
        <div className="exact_date kk">
          <h2 className="date maha">location</h2>
        </div>
        <div className="header_sub ty">
          <p className="header_p">Sunday, February 08, 2026</p>
        </div>
        <div className="header_sub jur">
          <div class="image-wrappers">
            <img
              src="https://i.imgur.com/nKlzRsT.jpeg"
              alt=""
              className="r_img nanaa"
            />
          </div>

          {/* <button className="rsvp_btn"></button> */}
        </div>
        <div className="header_sub ty">
          <p className="header_p">
            Fiestaa Resorts,
            <br />
            Devanahalli Road,
            <br />
            Bengaluru 562149
          </p>
        </div>
      </div>

      <div className="naughty plyan  ">
        <div className="naughty_sub">
          <p className="header_p bos">Saturday, July 19, 2025</p>
        </div>
        <div className="naughty_sub">
          <p className="header_p boss">
            Hyatt Regency Trinidad
            <br />
            1 Wrightson Road
            <br />
            Port of Spain, Trinidad and Tobago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
