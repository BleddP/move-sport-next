// Next
import Image from "next/image";

// Typescript interfaces
import { Header } from '@interfaces'

// Components
import Button from "@components/ui-components/Button";
import renderImage from "@components/helper-functions/renderImage";

// Logos
import VSPN from "@assets/logos/vspn.svg";


const Hero = (props: any) => {
  const header: Header = props.header
  const type: string = props.type

  const image = renderImage(props.header.header_image.data.attributes)

  return (
    <div
      className={type === "homepage" ? "hero homepage" : "hero"}
      style={{ backgroundImage: `url('${image.url}')` }}
    >
      <div className="container">
        <div className="hero__content">
          <h1>{header.title}</h1>
          {header.subtitle &&
            <h4>{header.subtitle}</h4>
          }
          {type === "homepage" && (
            <div className="vspn-certified">
              <Image src={VSPN} />
              <span>gecertificeerd</span>
            </div>
          )}
          {header.buttons && (
            header.buttons.map((button: any) => {
             return <Button key={button.id} to={button.url} text={button.text} type={button.button_type} target={button.target} />
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
