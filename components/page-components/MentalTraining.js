import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Content
import Complete from "@assets/icons/complete.svg";

// Helper functions
import renderImage from "@components/helper-functions/renderImage";

const MentalTraining = ({ data }) => {
  const image_1 = renderImage(data.image_1.data.attributes);
  const image_2 = renderImage(data.image_2.data.attributes);
  const image_3 = renderImage(data.image_3.data.attributes);

  return (
    <section className="mental-training">
      <div className="container container--48">
        <div className="mental-training__content">
          <h2>{data.title}</h2>
          <div className="mental-training__usps">
            <div className="usp">
              <Image width={60} height={60} src={image_1.url} />
              <div style={{ marginTop: 12 }}>
                <ReactMarkdown>{data.intro_1}</ReactMarkdown>
              </div>
            </div>
            <div className="usp">
              <Image width={60} height={60} src={image_2.url} />
              <div style={{ marginTop: 12 }}>
                <ReactMarkdown>{data.intro_2}</ReactMarkdown>
              </div>
            </div>
            <div className="usp">
              <Image width={60} height={60} src={image_3.url} />
              <div style={{ marginTop: 12 }}>
                <ReactMarkdown>{data.intro_3}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalTraining;
