// Next
import Link from "next/link";
import Image from "next/image";

// Content
import Logo from "@assets/logos/logo_white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__grid__navigation">
            <h4>Move Sport Psychologie</h4>
            <Link href="/">Home</Link>
            <Link href="/werkwijze/">Werkwijze</Link>
            <Link href="/socials/">Socials</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div className="footer__grid__logo">
            <Image src={Logo} height={200} width={200} />
          </div>
          <div className="footer__grid__callback">
            <div>
              <span>Bel me terug</span>
              <p>
                Laat hieronder je telefoon nummer achter en ik bel je graag
                terug voor een kennismaking
              </p>
              <form>
                  <input type='text' placeholder="Bel me terug" />
                  <button type='submit'>Verzenden</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;