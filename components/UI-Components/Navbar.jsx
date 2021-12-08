import Link from "next/link";

// Components
import Submenu from "./Submenu";

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
      <div className="header__logo">
          <span>logo</span>
      </div>
      <div className="header__navigation">
        <nav className='nav'>
          {menu.map((nav) => {
            if (nav.children) {
              return <Submenu data={nav} key={nav.id} />;
            } else {
              return (
                <Link key={nav.id} href={nav.to}>
                  <a className='nav__item'>{nav.menu}</a>
                </Link>
              );
            }
          })}
        </nav>
        <div className="navigation__socials">
          <a href="/">FB</a>
          <a href="/">TW</a>
          <a href="/">LI</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
