import Link from "next/link";
import Image from "next/image";

// Icons
import Chevron from "@assets/icons/chevron-right.svg";

const Button = ({ to, type, text }) => {
  return (
    <Link href={to}>
      <button
        className={
          type === "secondary" ? "btn btn--secondary" : "btn btn--primary"
        }
      >
        <span className="text">{text}</span>{" "}
        <Image className="icon" src={Chevron} width={18} height={18} />
      </button>
    </Link>
  );
};

export default Button;
