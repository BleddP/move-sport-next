import Link from "next/link";
import Image from "next/image";

// Icons
import iconFB from "@assets/icons/facebook.svg";
import iconIG from "@assets/icons/instagram.svg";
import iconLI from "@assets/icons/linkedin.svg";

const FooterStrip = () => {
  return (
    <footer className="footer__strip">
      <Link href="/">
        <a>Algemene Voorwaarden</a>
      </Link>
      <Link href="/">
        <a>Move Sport Psychologie &copy; {new Date().getFullYear()}</a>
      </Link>
      <div className="footer__strip__socials">
        <a href="#" target="_blank">
          <Image src={iconIG} />
        </a>
        <a href="#" target="_blank">
          <Image src={iconFB} />
        </a>
        <a href="#" target="_blank">
          <Image src={iconLI} />
        </a>
      </div>
    </footer>
  );
};

export default FooterStrip;