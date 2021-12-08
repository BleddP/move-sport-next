import Link from "next/link";
import Image from "next/image";

// Components
import Submenu from "./Submenu";

// Icons & Logos
import Logo from "@assets/logos/logo_white.svg";
import iconFB from "@assets/icons/facebook.svg";
import iconIG from "@assets/icons/instagram.svg";
import iconLI from "@assets/icons/linkedin.svg";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      menu: "Over mij",
      to: "/about/",
    },
    {
      id: 2,
      menu: "Werkwijze",
      to: "/werkwijze/",
      children: [
        {
          id: 1,
          menu: "Individueel",
          to: "/werkwijze/individueel/",
        },
        {
          id: 2,
          menu: "Teams",
          to: "/werkwijze/teams/",
        },
        {
          id: 3,
          menu: "Zakelijk",
          to: "/werkwijze/zakelijk",
        },
      ],
    },
    {
      id: 3,
      menu: "Socials",
      to: "/socials/",
    },
    {
      id: 4,
      menu: "Contact",
      to: "/contact/",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Image src={Logo} />
        </div>
        <div className="header__navigation">
          <nav className="nav">
            {menu.map((nav) => {
              if (nav.children) {
                return <Submenu data={nav} key={nav.id} />;
              } else {
                return (
                  <Link key={nav.id} href={nav.to}>
                    <a className="nav__item">{nav.menu}</a>
                  </Link>
                );
              }
            })}
          </nav>
          <div className="header__navigation__socials">
            <a href="/">
              <Image src={iconFB} />
            </a>
            <a href="/">
              <Image src={iconLI} />
            </a>
            <a href="/">
              <Image src={iconIG} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
