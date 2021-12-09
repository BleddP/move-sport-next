// React
import { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Submenu from "./Submenu";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

// Icons & Logos
import Logo from "@assets/logos/logo_white.svg";
import iconFB from "@assets/icons/facebook.svg";
import iconIG from "@assets/icons/instagram.svg";
import iconLI from "@assets/icons/linkedin.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const setOpenState = () => {
    if (open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setOpen(!open);
  };
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

  // Mobile Navbar
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Image src={Logo} height={50} />
        </div>
        <div className="header__navigation">
          <MenuButton setOpenState={setOpenState} open={open} />
          <MobileMenu open={open} menu={menu} />
        </div>
      </div>
    </header>
  );

  // Desktop Navbar
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Image src={Logo} height={50} />
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
