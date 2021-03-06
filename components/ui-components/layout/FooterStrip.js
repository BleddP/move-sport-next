import Link from "next/link";
import Image from "next/image";

// Icons
import iconFB from "@assets/icons/facebook.svg";
import iconIG from "@assets/icons/instagram.svg";
import iconLI from "@assets/icons/linkedin.svg";

const FooterStrip = () => {
  return (
    <footer className="footer__strip">
      <div>
        <Link href="/policies/terms-conditions">
          <a>Algemene Voorwaarden</a>
        </Link>
        {' '}
        <Link href="/policies/privacy">
          <a>Privacy Verklaring</a>
        </Link>
      </div>
      <Link href="/">
        <a>MOVE sportpsychologie &copy; {new Date().getFullYear()}</a>
      </Link>
      <div className="footer__strip__socials">
        <a
          href="https://www.instagram.com/movesportpsychologie/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={iconIG} />
        </a>
        <a
          href="https://www.facebook.com/MOVE-sportpsychologie-101891458138142"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={iconFB} />
        </a>
        <a
          href="https://www.linkedin.com/company/move-sportpsychologie/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={iconLI} />
        </a>
      </div>
    </footer>
  );
};

export default FooterStrip;
