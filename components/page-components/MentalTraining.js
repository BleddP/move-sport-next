import Image from "next/image";

// Content
import Pulse from "@assets/icons/pulse.svg";
import Sparkles from "@assets/icons/sparkles.svg";
import Complete from "@assets/icons/complete.svg";

const MentalTraining = ({data}) => {
  return (
    <section className="mental-training">
      <div className="container container--96">
        <div className="mental-training__content">
          <h2>{data.title}</h2>
          <div className="mental-training__usps">
            <div className="usp">
              <Image width={96} height={96} src={Sparkles} />
              <p>
                {data.intro_1}
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={Complete} />
              <p>
                {data.intro_2}
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={Pulse} />
              <p>
                {data.intro_3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalTraining;
