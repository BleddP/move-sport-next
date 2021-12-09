import Image from "next/image";

// Content
import Icon from "@assets/icons/facebook.svg";

const MentalTraining = () => {
  return (
    <section className="mental-training">
      <div className="container container--96">
        <div className="mental-training__content">
          <h2>Mentale Training</h2>
          <div className="mental-training__usps">
            <div className="usp">
              <Image src={Icon} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                magnam minus dolorem quae laborum animi voluptates corrupti
                blanditiis unde explicabo.
              </p>
            </div>
            <div className="usp">
              <Image src={Icon} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                magnam minus dolorem quae laborum animi voluptates corrupti
                blanditiis unde explicabo.
              </p>
            </div>
            <div className="usp">
              <Image src={Icon} />
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
