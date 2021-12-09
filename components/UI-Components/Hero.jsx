import Image from "next/image";

// Components
import Button from "@components/ui-components/Button";

// Logos
import VSPN from "@assets/logos/vspn.svg";
const Hero = ({ image, type }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="container">
        <div className="hero__content">
          <h1>Start vandaag nog jou mentale traject</h1>
          {type === "homepage" && (
            <div className="vspn-certified">
              <Image src={VSPN} />
              <span>gecertificeerd</span>
            </div>
          )}
          <Button to="/contact/" text="Plan een sessie" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
