import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./dress.css";

const DressCode = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const dressCodeSections = [
    {
      question: "Mehndi",
      answer: (
        <>
          <p className="dress-code-intro">
            Light pastel colors. Indian outfit not required.
          </p>
          <ul className="kos">
            <li>Men: Pastel colored Kurta (if preferred)</li>
            <li>Women: Pastel colored Kurti (if preferred)</li>
          </ul>
        </>
      ),
    },
    {
      question: "Sangeet",
      answer: (
        <>
          <ul className="kos">
            <li>Men: Navy Blue / Black Suits</li>
            <li>Women: Deep Purple Gowns</li>
          </ul>
        </>
      ),
    },
    {
      question: "Haldi",
      answer: (
        <>
          <ul className="kos">
            <li>Men: Yellow Kurta</li>
            <li>Women: Yellow Kurti</li>
          </ul>
        </>
      ),
    },
    {
      question: "Baraat, Varmala & Phera’s",
      answer: (
        <>
          <ul className="kos">
            <li>Men: Indian Bandhgala in Black or Blue / Navy Blue Suit</li>
            <li>Women: Navy Blue Indian Sharara</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover mallika">
        <h2 className="faq_title" style={{ color: "#fff" }}>
          What To Wear
        </h2>
      </div>

      <div className="faq_card_section">
        {dressCodeSections.map((section, index) => (
          <div className="faq_sub_card" key={index}>
            <div className="faq_top" onClick={() => toggleAccordion(index)}>
              <div className="faq_top_t">
                <h2 className="faq_qs">{section.question}</h2>
              </div>
              <div className="faq_top_t">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div className="line"></div>
            {activeIndex === index && (
              <div className="faq_ans">
                <div className="faq_ans_p">{section.answer}</div>
              </div>
            )}
          </div>
        ))}

        {/* Image for reference subsection */}
        <div className="faq_sub_card">
          <div className="faq_top" onClick={() => toggleAccordion("image")}>
            <div className="faq_top_t">
              <h2 className="faq_qs">Image for reference</h2>
            </div>
            <div className="faq_top_t">
              {activeIndex === "image" ? <FaMinus /> : <FaPlus />}
            </div>
          </div>

          <div className="line"></div>

          {activeIndex === "image" && (
            <div className="faq_ans">
              <div className="faq_ans_p">
             
                  <img
                    src="https://i.imgur.com/YrPLmd5.png"
                    alt="Dress reference"
                    className="dress-ref-img"
                  />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DressCode;
