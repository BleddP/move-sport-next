// React
import { useState } from "react";

// Libs
import axios from "axios";

const ContactForm = () => {
  // Submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individueel",
    message: "",
    formMessage: "",
  });

  console.log(formData)

  const updateForm = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const focusForm = (e) => {
    const parent = e.target.closest(".field");
    parent.classList.add("focus");
  };

  const onBlur = (e) => {
    const parent = e.target.closest(".field");
    parent.classList.remove("focus");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitError(false);
    setIsSubmitting(true)

    if (formData.formMessage) {
      setSubmitSuccess(false);
      setSubmitError("Sorry er is iets mis gegaan, probeer het later nog een keer");
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitError('')
      }, 5000);
      return;
    }

    delete formData.formMessage

    const body = {
      data: formData
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-forms`,
        body,
        config
      )
      .then(() => {
        setSubmitSuccess(true);
      })
      .catch(() => {
        setSubmitError(
          "Sorry, er is iets mis gegaan. Probeer het nog een keer of stuur me direct een email"
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {submitSuccess ? (
        <div className="contact-form">
          <div className="submit-success">
            <p>Je bericht is verstuurd! We nemen zo gauw mogelijk contact met je
            op.</p>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={submitForm}>
          <div className="field">
            <label htmlFor="name">Naam</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
              id="name"
              minLength={2}
              maxLength={25}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              value={formData.email}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
              id="email"
              minLength={5}
              maxLength={55}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefoon</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
              id="phone"
              maxLength={12}
            />
          </div>
          <div className="field">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={formData.type}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
            >
              <option value="individueel">Individueel</option>
              <option value="teams">Teams</option>
              <option value="zakelijk">Zakelijk</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
              maxLength={500}
            ></textarea>
          </div>
          <div id="form-msg" className="field">
            <label htmlFor="message">Bericht</label>
            <textarea
              id="formMessage"
              value={formData.formMessage}
              onChange={updateForm}
              onFocus={focusForm}
              onBlur={onBlur}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn--primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Verzenden"}
          </button>
        </form>
      )}
      {submitError && (
        <div className="contact-form" style={{ marginTop: 12 }}>
          <p style={{ color: "firebrick" }}>{submitError}</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
