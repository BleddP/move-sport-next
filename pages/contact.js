// Next
import Image from "next/image";

// Components
import NavBarBg from "@ui/layout/NavBarBg";
import ContactForm from "@components/page-components/ContactForm";

// Icons
import Instagram from "@assets/icons/instagram.svg";
import Facebook from "@assets/icons/facebook.svg";
import LinkedIn from "@assets/icons/linkedin.svg";
import Phone from "@assets/icons/phone-portrait-outline.svg";
import Email from "@assets/icons/mail-unread-outline.svg";

const ContactPage = () => {
  return (
    <main>
      <NavBarBg />
      <section className="container container--96">
        <div className="contact-page">
          <div className="contact-page__grid">
            <div>
              <h1>Contact</h1>
              <p>
                Heb je een vraag of wil je een afspraak maken? Vul het
                contactformulier in en ik neem zo snel mogelijk contact met je
                op.
              </p>
              <p>
                Je kunt ook direct contact opnemen via onderstaande gegevens.
              </p>
              <div className="contact-page__contact">
                <a href="#" target="_blank" referrerPolicy="noopener">
                  <Image src={Phone} width={24} height={24} />
                  <span>123456789</span>
                </a>
                <a href="#" target="_blank" referrerPolicy="noopener">
                  <Image src={Email} width={24} height={24} />
                  <span>info@movesportpsychologie.nl</span>
                </a>
              </div>
                   <div className="contact-page__socials">
                <a href="#" target="_blank" referrerPolicy="noopener">
                  <Image src={Instagram} width={20} height={20} />
                </a>
                <a href="#" target="_blank" referrerPolicy="noopener">
                  <Image src={Facebook} width={20} height={20} />
                </a>
                <a href="#" target="_blank" referrerPolicy="noopener">
                  <Image src={LinkedIn} width={20} height={20} />
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
