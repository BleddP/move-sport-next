// Next
import Image from "next/image";

// Components
import Button from "@components/ui-components/Button";

// Logos
import VSPN from "@assets/logos/vspn.svg";
const Hero = ({ header, type }) => {
  const image = process.env.NEXT_PUBLIC_BASE_URL + header.header_image.data.attributes.formats.large.url

  console.log(header.buttons)

  return (
    <div
      className={type === "homepage" ? "hero homepage" : "hero"}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="container">
        <div className="hero__content">
          <h1>{header.title}</h1>
          {type === "homepage" && (
            <div className="vspn-certified">
              <Image src={VSPN} />
              <span>gecertificeerd</span>
            </div>
          )}
          {header.buttons && (
            header.buttons.map((button: any) => {
              <Button key={button.id} to={button.url} text={button.text} type={button.button_type} target={button.target} />
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
