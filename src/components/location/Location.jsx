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
              src="https://r1imghtlak.mmtcdn.com/ad82115a1e6411eaa24b0242ac110003.jpg"
              alt=""
              className="r_img nanaa"
            />
          </div>

          {/* <button className="rsvp_btn"></button> */}
        </div>
        <div
          className="header_sub ty"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="header_p">
            Fiestaa Resorts,
            <br />
            Devanahalli Road,
            <br />
            Bengaluru 562149
          </p>
          <button
            className="rsvp_btn"
            style={{
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: "10",
              textDecoration: "underline",
            }}
          >
            <a
              style={{ color: "#000" }}
              target="_blank"
              href="https://maps.app.goo.gl/oPjA1fQV2tobQo9q6"
            >
              get location
            </a>
          </button>
        </div>
      </div>

      <div className="naughty plyan  ">
        <div className="naughty_sub">
          <p className="header_p bos">Sunday, February 08, 2026</p>
        </div>
        <div className="naughty_sub" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p className="header_p boss">
            Fiestaa Resorts,
            <br />
            Devanahalli Road,
            <br />
            Bengaluru 562149
          </p>

          <button
            className="rsvp_btn"
            style={{
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: "10",
              textDecoration: "underline",
            }}
          >
            <a
              style={{ color: "#000" }}
              target="_blank"
              href="https://maps.app.goo.gl/oPjA1fQV2tobQo9q6"
            >
              get location
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
