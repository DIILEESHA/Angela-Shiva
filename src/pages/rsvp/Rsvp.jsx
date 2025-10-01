import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./rsvp.css";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attendance: "",
    guestCount: "1",
    plusOneName: "",
    mealPreference: "",
    dietaryRestrictions: "",
    message: "",
    submittedAt: new Date().toISOString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "rsvps"), formData);
      alert("Thank you for your RSVP!");
      setFormData({
        fullName: "",
        attendance: "",
        guestCount: "1",
        plusOneName: "",
        mealPreference: "",
        dietaryRestrictions: "",
        message: "",
        submittedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rsvp">
      <div className="rep">
        <div className="rsvp_img"></div>
      </div>
      <div className="details_rsvps">
        <div className="rsvpier">
          <h2 className="rsvp_ttle">RSVP</h2>

          <p className="rsvp_p">
            We’re so excited to celebrate our special day with you! Kindly RSVP
            by 15th Nov, 2025.
          </p>

          <div className="form_area">
            <form onSubmit={handleSubmit} className="rsvp_form">
              <div className="rsvp_inputer_section">
                <label htmlFor="fullName" className="rsvp_label">
                  Guest Name(s)
                </label>
                <input
                  type="text"
                  className="rsvp_input"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="rsvp_inputer_section">
                <label className="rsvp_label">Will you be attending?</label>
                <div className="attendance_options">
                  <label className="option_label">
                    <input
                      type="radio"
                      name="attendance"
                      value="accept"
                      checked={formData.attendance === "accept"}
                      onChange={handleChange}
                      required
                    />
                    <span className="option_text">Yes, joyfully accepting</span>
                  </label>
                  <label className="option_label">
                    <input
                      type="radio"
                      name="attendance"
                      value="decline"
                      checked={formData.attendance === "decline"}
                      onChange={handleChange}
                    />
                    <span className="option_text">
                      No, regretfully declining
                    </span>
                  </label>
                </div>
              </div>

            

              <div className="rsvp_inputer_section">
                <label htmlFor="message" className="rsvp_label">
                  Would you like to leave a special message for Angela & Shiva?
                </label>
                <textarea
                  name="message"
                  className="rsvp_textarea"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <div className="submit_section">
                <button
                  type="submit"
                  className="submit_button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send RSVP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
