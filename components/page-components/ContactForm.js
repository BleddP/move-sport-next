// React
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individueel",
    message: "",
  });

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

  return (
    <form className="contact-form">
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
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Telefoon</label>
        <input
          required
          type="tel"
          value={formData.phone}
          onChange={updateForm}
          onFocus={focusForm}
          onBlur={onBlur}
          id="phone"
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
          <option value="team">Team</option>
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
        ></textarea>
      </div>
      <button type='submit' className="btn btn--primary">Verzenden</button>
    </form>
  );
};

export default ContactForm;
