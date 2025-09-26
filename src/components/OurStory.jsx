import React, { useState } from "react";
import "./ourstory.css";

const OurStory = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const events = [
    {
      title: "The Mehndi",
      date: "7th Feb, 1pm",
      image: "https://i.imgur.com/L3cLO1W.mp4",
      description: `Henna, laughter, and good vibes! Mehndi is the tradition of applying
      henna (a temporary, natural dye) to the bride's hands and feet as a
      celebratory event. This symbolizes blessings, joy, and love for the
      couple. Tradition meets fun as family & friends join the bride for
      this age-old ritual. While it’s classic for women to get intricate
      designs, guys are welcome to join the fun too with a light Mehndi
      touch. Expect music, snacks, and lots of selfies.`,
    },
    {
      title: "The Sangeet",
      date: "7th Feb, 8pm",
      image: "https://i.imgur.com/r09TvnB.mp4",
      description: `A night of rhythm, sparkle, and dance battles. It's a custom before
      the wedding for guests to dance, drink and celebrate with the couple.
      From Gallan Goodiyaan to Saddi Galli, this is your chance to hit the
      dance floor. Don’t miss the performances from friends, family and
      colleagues; and yes, Angela & Shiva will have one too. [Shoutout:
      Mommy Rushelle, Neha Didi, Tito Tan, Lily, Ate Eka, VB — start
      rehearsals now!]`,
    },
    {
      title: "The Haldi",
      date: "8th Feb, 12:30pm",
      image: "https://i.imgur.com/ZPSxTci.mp4",
      description: `Family and friends gather to apply the haldi (turmeric paste), sing,
      dance, and play games to celebrate. A pre-wedding Indian tradition
      where turmeric-based paste is applied to the bride and groom to bless
      them for a prosperous marriage and keep negative energies away. This is
      typically followed by a fun session of games and a dash in the pool as
      the couple wears off the haldi.`,
    },
    {
      title: "The Baraat & Varmala",
      date: "8th Feb, 7pm",
      image: "https://i.imgur.com/12cWhCc.mp4",
      description: `Part 1 of the actual grand finale of the wedding, The Baraat is a
      dancing congregation led by groom’s squad as they make their way to the
      wedding stage and are received by the bride’s family. Once the bride
      enters, the couple exchanges the Varmala (exchange of garlands) which
      represents the acceptance of the wife and husband.`,
    },
    {
      title: "The Phera’s",
      date: "9th Feb, 1am",
      image: "https://i.imgur.com/pd1zNrt.mp4",
      description: `The sacred vows. Yes, it’s late — but auspicious! Post dinner, drinks
      and a rested round of gossip, we conclude with the Phera’s at 1am on
      9th Feb. The Phera’s is the religious solemnization ceremony performed
      by the Hindu priest where the couple would exchange vows which is then
      followed by the family, friends and guests blessing the couple.`,
    },
  ];

  return (
    <div className="story-container">
      <div className="faq_cover dalsi">
        <h2 className="faq_title">Our Wedding Events</h2>
      </div>

      {/* Events Timeline */}
      <div className="story-timeline">
        {events.map((event, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = event.description.slice(0, 120) + "...";

          return (
            <div
              className={`timeline-item ${
                index % 2 === 0 ? "animate-left" : "animate-right"
              }`}
              key={index}
            >
       

              <video
                className="timeline-image"
                src={event.image}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="timeline-text">
                <div className="timeline-date">{event.date}</div>
                <h2 className="timeline-title">{event.title}</h2>
                <div className="timeline-body">
                  <p>{isExpanded ? event.description : shortText}</p>
                  <button
                    className="read-more"
                    onClick={() => toggleReadMore(index)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
              <div
                className={`timeline-dot ${index % 2 === 0 ? "nasi" : "pasi"}`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurStory;
