// Next
import Image from "next/image";

// Components
import NavBarBg from "@ui/layout/NavBarBg";
import ContactForm from "@components/page-components/ContactForm";
import PartnerStrip from "@components/ui-components/PartnerStrip";

// Icons
import Instagram from "@assets/icons/instagram.svg";
import Facebook from "@assets/icons/facebook.svg";
import LinkedIn from "@assets/icons/linkedin.svg";
import Phone from "@assets/icons/phone-portrait-outline.svg";
import Email from "@assets/icons/mail-unread-outline.svg";

const ContactPage = ({ page }) => {
  const phone = page.contact.data.attributes.phone;
  const email = page.contact.data.attributes.email;

  return (
    <main>
      <NavBarBg />
      <section className="container container--96">
        <div className="contact-page">
          <div className="contact-page__grid">
            <div>
              <h1>{page.content.title}</h1>
              <p>{page.content.content}</p>
              <div className="contact-page__contact">
                <a href="tel:0637347970" target="_blank" rel="noreferrer" referrerPolicy="noopener">
                  <Image src={Phone} width={24} height={24} />
                  <span>{phone}</span>
                </a>
                <a href="mailto:info@movesportpsychologie.nl" target="_blank" rel="noreferrer" referrerPolicy="noopener">
                  <Image src={Email} width={24} height={24} />
                  <span>{email}</span>
                </a>
              </div>
              <div className="contact-page__socials">
                <a
                  href="https://www.instagram.com/movesportpsychologie/"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="noopener"
                >
                  <Image src={Instagram} width={20} height={20} />
                </a>
                <a
                  href="https://www.facebook.com/MOVE-sportpsychologie-101891458138142"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="noopener"
                >
                  <Image src={Facebook} width={20} height={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/move-sportpsychologie/"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="noopener"
                >
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
      {page.partners && <PartnerStrip partners={page.partners} />}
    </main>
  );
};

// Libs
import axios from "axios";

// Fetch data from the server
export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-page`
  );

  if (response.status && response.status < 300) {
    return {
      props: {
        page: response.data.data.attributes,
      },
    };
  } else {
    console.log("Error: ", response);
  }
}

export default ContactPage;
