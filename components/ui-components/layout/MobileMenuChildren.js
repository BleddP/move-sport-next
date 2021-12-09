import Link from "next/link";

const MobileMenuChildren = ({ data, open }) => {
  return (
    <div className={open ? "mobile-submenu active" : "mobile-submenu"}>
      {data.map((nav) => {
        return (
          <Link key={nav.id} href={nav.to} passHref>
            <a className="nav__mobile__menu__item">{nav.menu}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenuChildren;
