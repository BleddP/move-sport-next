import Image from "next/image";

// Content
import Pulse from "@assets/icons/pulse.svg";
import Sparkles from "@assets/icons/sparkles.svg";
import Complete from "@assets/icons/complete.svg";

// Helper functions
import renderImage from "@components/helper-functions/renderImage";

const MentalTraining = ({data}) => {

  const image_1 = renderImage(data.image_1.data.attributes)
  const image_2 = renderImage(data.image_2.data.attributes)
  const image_3 = renderImage(data.image_3.data.attributes)

  return (
    <section className="mental-training">
      <div className="container container--96">
        <div className="mental-training__content">
          <h2>{data.title}</h2>
          <div className="mental-training__usps">
            <div className="usp">
              <Image width={96} height={96} src={image_1.url} />
              <p>
                {data.intro_1}
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={image_2.url} />
              <p>
                {data.intro_2}
              </p>
            </div>
            <div className="usp">
              <Image width={96} height={96} src={image_3.url} />
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
