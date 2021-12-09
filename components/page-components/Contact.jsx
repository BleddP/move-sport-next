import Image from 'next/image'

// Content
import Logo from '@assets/logos/logo_black.svg'

const Contact = () => {
  return (
    <section className="container container--96">
      <div className="contact">
        <h2>Contact</h2>
        <address className="address">
            <span>Troelstrastraat 1</span>
            <span>3719 CD Didam</span>
            <span>Nederland</span>
            <a href='mailto:info@movesportpsychologie.nl' target="_blank">info@movesportpsychologie.nl</a>
        </address>
        <Image src={Logo} />
      </div>
    </section>
  );
};

export default Contact;
