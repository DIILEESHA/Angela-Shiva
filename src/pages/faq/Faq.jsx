import React, { useState } from "react";
import "./faq.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Venue, Stay & Airport Transfers",
      questions: [
        {
          question: "The Venue",
          answer: (
            <>
              <h4>Fiestaa Resorts, Bengaluru</h4>
              <p>
                lush lawns, spacious halls, and the perfect stage for love
                stories.
              </p>
            </>
          ),
        },
        {
          question: "Stay",
          answer: (
            <>
              <h4>Accommodation</h4>
              <p>
                Once you have RSVP’d we will be booking your stay at either
                Fiestaa Resorts, The Monarch Hotel, or Harikaa Resort — all of
                which have been carefully vetted and chosen for your comfortable
                stay and are in close proximity to Fiestaa. Your stay will be
                booked from 7th Feb to 9th Feb [early check in and late check
                out is available, just feel free to let us know]. Once you RSVP,
                we’ll be in touch with you for your flight details!
              </p>
            </>
          ),
        },
        {
          question: "Airport Transfers",
          answer: (
            <>
              <h4>Arrival & Departure</h4>
              <p>
                We’ll handle the logistics. Just share your flight details after
                RSVP, and a ride will be waiting for you at both arrival and
                departure.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Venue, Stay & Airport Transfers</h2>
      </div>

      <div className="faq_card_section">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq_category">
            <h3 className="faq_category_title">{category.category}</h3>

            {category.questions.map((faq, index) => {
              const id = `${catIndex}-${index}`;
              return (
                <div className="faq_sub_card" key={id}>
                  <div className="faq_top" onClick={() => toggleAccordion(id)}>
                    <div className="faq_top_t">
                      <h2 className="faq_qs">{faq.question}</h2>
                    </div>
                    <div className="faq_top_t">
                      {activeIndex === id ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>

                  <div className="line"></div>

                  {activeIndex === id && (
                    <div className="faq_ans">
                      <div className="faq_ans_p">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
