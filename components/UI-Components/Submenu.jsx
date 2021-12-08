import Link from "next/link";

const Submenu = ({ data }) => {
  return (
    <div className="nav__submenu">
      <Link href={data.to}>
        <a className="nav__item">{data.menu}</a>
      </Link>
      <div className="nav__submenu submenu">
        {data.children.map((nav) => {
          return (
            <Link key={nav.id} href={nav.to}>
              <a className="nav__item">{nav.menu}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
