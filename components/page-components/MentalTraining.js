import Image from "next/image";

// Content
import Pulse from "@assets/icons/pulse.svg";
import Sparkles from "@assets/icons/sparkles.svg";
import Complete from "@assets/icons/complete.svg";

const MentalTraining = () => {
  return (
    <section className="mental-training">
      <div className="container container--96">
        <div className="mental-training__content">
          <h2>Mentale Training</h2>
          <div className="mental-training__usps">
            <div className="usp">
              <Image width={96} height={96} src={Sparkles} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                magnam minus dolorem quae laborum animi voluptates corrupti
                blanditiis unde explicabo.
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={Complete} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                magnam minus dolorem quae laborum animi voluptates corrupti
                blanditiis unde explicabo.
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={Pulse} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                magnam minus dolorem quae laborum animi voluptates corrupti
                blanditiis unde explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalTraining;
