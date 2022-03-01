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
            <h4>MOVE sport psychologie</h4>
            <Link href="/">Home</Link>
            <Link href="/about">Over MOVE</Link>
            <Link href="/aanbod/">Aanbod</Link>
            <Link href="/events/">Events</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div className="footer__grid__logo">
            <Image src={Logo} height={200} width={200} />
          </div>
          <div className="footer__grid__callback">
            <div>
              <span>Bel mij terug</span>
              <p>
                Laat hier je telefoonnummer achter en ik bel je terug. 
              </p>
              <form>
                  <input type='text' placeholder="Bel mij terug" />
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
