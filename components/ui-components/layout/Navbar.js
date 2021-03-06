// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

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
  // Menu State
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "inherit";
  };
  const setOpenState = () => {
    if (!open) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  Router.events.on("routeChangeComplete", () => {
    closeMenu();
  });

  const menu = [
    {
      id: 1,
      menu: "Over MOVE",
      to: "/about",
    },
    {
      id: 2,
      menu: "Aanbod",
      to: "/aanbod",
      children: [
        {
          id: 1,
          menu: "Individueel",
          to: "/aanbod/individueel",
        },
        {
          id: 2,
          menu: "Teams",
          to: "/aanbod/teams",
        },
        {
          id: 3,
          menu: "Zakelijk",
          to: "/aanbod/zakelijk",
        },
      ],
    },
    {
      id: 3,
      menu: "Events",
      to: "/events",
    },
    {
      id: 4,
      menu: "Contact",
      to: "/contact",
    },
  ];

  // Render mobile or desktop menu
  const [viewport, setViewport] = useState(null);
  const resize = () => {
    const innerWidth = window.innerWidth;
    setViewport(innerWidth);
  };
  useEffect(() => {
    const viewport = window.innerWidth;
    setViewport(viewport);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Mobile Navbar
  if (viewport > 600) {
    // Desktop Navbar
    return (
      <header className="header">
        <div className="header__container">
          <Link href="/">
            <div className="header__logo">
              <Image src={Logo} height={100} />
            </div>
          </Link>
          <div className="header__navigation">
            <nav className="nav">
              {menu.map((nav) => {
                if (nav.children) {
                  return <Submenu data={nav} key={nav.id} />;
                } else {
                  return (
                    <Link key={nav.id} href={nav.to}>
                      <a
                        className={
                          Router.pathname === nav.to
                            ? "nav__item active"
                            : "nav__item"
                        }
                      >
                        {nav.menu}
                      </a>
                    </Link>
                  );
                }
              })}
            </nav>
            <div className="header__navigation__socials">
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
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__container">
          <Link href="/">
            <div className="header__logo">
              <Image src={Logo} height={50} />
            </div>
          </Link>
          <div className="header__navigation">
            <MenuButton setOpenState={setOpenState} open={open} />
            <MobileMenu open={open} menu={menu} />
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
