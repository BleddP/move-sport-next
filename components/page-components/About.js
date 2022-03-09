// Image
import Image from 'next/image'

// Libs
import renderImage from "../helper-functions/renderImage";

// Components
import Button from "@ui/Button";
import Accordion from "@ui/Accordion";
import TextBlock from "@ui/TextBlock";

const About = ({ data }) => {
  const image = renderImage(data.image.data.attributes);
  const signature = renderImage(data.signature.data.attributes)

  return (
    <section className="about">
      <div className="container container--48">
        <div className="about__content">
          <div className="about__content copy">
            {data.title && <h2>{data.title}</h2>}
            {data.intro && <p>{data.intro}</p>}
            {data.signature && <img src={signature.url} alt={signature.alternativeText} className="signature" width={signature.width} height={signature.height} />}
            {data.dynamic_content &&
              data.dynamic_content.map((item, i) => {
                const img = "ui-components.image";
                const button = "ui-components.button";
                const content = "ui-components.text-block";
                const accordion = "ui-components.accordion";

                if (item.__component === img) {
                  const image = renderImage(item.image.data.attributes);
                  return (
                    <div key={i} className="dynamic-image">
                      <img src={image.url} alt={item.image.data.name} />
                    </div>
                  );
                }

                if (item.__component === button) {
                  return (
                    <Button
                      key={i}
                      text={item.text}
                      to={item.url}
                      target={item.target}
                      type={item.type}
                    />
                  );
                }

                if (item.__component === content) {
                  return <TextBlock key={i} data={item} />;
                }

                if (item.__component === accordion) {
                  return <Accordion key={i} accordion={item} />;
                }
              })}
          </div>
          <div className="about__content image">
            <img src={image.url} alt={data.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
