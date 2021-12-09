// React
import { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components 
import MobileMenuChildren from "./MobileMenuChildren";

// Icons
import Chevron from "@assets/icons/chevron-right.svg";

const MobileMenu = ({ open, menu }) => {
  const [submenu, setSubmenu] = useState(false);
  const setSubmenuState = () => {
    setSubmenu(!submenu);
  };

  return (
    <div className={open ? "nav__mobile active" : "nav__mobile"}>
      <div className="nav__mobile__menu">
        {menu.map((nav) => {
          if (nav.children) {
            return (
              <div key={nav.id} className="nav__mobile__menu__children">
                <div>
                  <Link href={nav.to}>
                    <a className="nav__mobile__menu__item">{nav.menu}</a>
                  </Link>
                  <MobileMenuChildren open={submenu} data={nav.children} />
                </div>
                <div
                  onClick={setSubmenuState}
                  className={submenu ? "menu-icon active" : "menu-icon"}
                >
                  <Image src={Chevron} width={24} height={24} />
                </div>
              </div>
            );
          } else {
            return (
              <Link key={nav.id} href={nav.to}>
                <a className="nav__mobile__menu__item">{nav.menu}</a>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
