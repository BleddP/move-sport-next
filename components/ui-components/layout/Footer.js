// Next
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Libs
import axios from "axios";

// Content
import Logo from "@assets/logos/logo_white.svg";

const Footer = () => {
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)
    if (msg) {
      setSubmitError(
        "Sorry, er is iets mis gegaan. Probeer het later nog een keer of bel me direct!"
      );
      setSubmitting(false)
      return;
    }

    const body = {
      data: {
        phone: phone,
        returned_call: false,
      },
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/callbacks`, body, config)
      .then(() => {
        setSubmitSuccess(true);
      })
      .catch((err) => {
        console.log({err})
        setSubmitSuccess(false);
        setSubmitError(
          "Sorry, er is iets mis gegaan. Probeer het later nog een keer of bel me direct!"
        );
        setTimeout(() => {
          setSubmitError('')
        }, 5000);
      }).finally(() => {
        setSubmitting(false)
      }) 
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__grid__navigation">
            <h4>MOVE sportpsychologie</h4>
            <Link href="/">Home</Link>
            <Link href="/about">Over MOVE</Link>
            <Link href="/aanbod">Aanbod</Link>
            <Link href="/events">Events</Link>
            <Link href="/articles">Artikelen</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer__grid__logo">
            <Image src={Logo} height={200} width={200} />
          </div>
          <div className="footer__grid__callback">
            <div>
              <span>Bel mij terug</span>
              <p>Laat hier je telefoonnummer achter en ik bel je terug.</p>
              {submitSuccess ? (
                <div className="submit-success">
                  <p>Je wordt zo gauw mogelijk terug gebeld!</p>
                </div>
              ) : (
              <form onSubmit={submitForm}>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="footer-tel"
                  placeholder="Bel mij terug"
                  minLength={8}
                  maxLength={12}
                  required
                />
                <input
                  onChange={(e) => setMsg(e.target.value)}
                  type="text"
                  id="footer-msg"
                  placeholder="Jou bericht"
                />
                <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Verzenden'}</button>
              </form>
              )}
              <div style={{color: 'firebrick', marginTop: 12}}>{submitError}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
