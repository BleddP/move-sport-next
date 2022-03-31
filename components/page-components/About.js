// Image
import { useEffect, useState } from "react";
import Image from "next/image";

// Libs
import renderImage from "../helper-functions/renderImage";

// Components
import Button from "@ui/Button";
import Accordion from "@ui/Accordion";
import TextBlock from "@ui/TextBlock";

const About = ({ data, h1Header, homepage }) => {
  const [loaded, setLoaded] = useState(false);
  const [yPos, setYPos] = useState(0);

  const image = renderImage(data.image.data.attributes);
  let signature = {};
  if (data.signature?.data) {
    signature = renderImage(data.signature.data.attributes);
  }

  const showImage = () => {
    setLoaded(true);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setYPos(position * 0.7);
  };

  useEffect(() => {
    setTimeout(() => {
      showImage();
    }, 2000);

    if (!homepage && window.innerWidth > 990) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__content copy">
            {data.title && h1Header && <h1>{data.title}</h1>}
            {data.title && !h1Header && <h2>{data.title}</h2>}
            {data.intro && <p>{data.intro}</p>}
            {data.signature && (
              <img
                src={signature.url}
                alt={signature.alternativeText}
                className="signature"
                width={signature.width}
                height={signature.height}
              />
            )}
            {data.dynamic_content &&
              data.dynamic_content.map((item, i) => {
                const img = "ui-components.image";
                const button = "ui-components.button";
                const content = "ui-components.text-block";
                const accordion = "ui-components.accordion";

                if (item.__component === img) {
                  const image = renderImage(item.image.data.attributes);
                  const customWidth = item.max_width
                    ? item.max_width
                    : image.width;
                  const aspectRatio = image.height / image.width;
                  const customHeight = item.max_width
                    ? item.max_width * aspectRatio
                    : image.height;

                  return (
                    <div key={i} className="dynamic-image">
                      <Image
                        src={image.url}
                        alt={item.image.data.name}
                        width={customWidth}
                        height={customHeight}
                      />
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
          <div
            className={
              loaded ? "about__content image loaded" : "about__content image"
            }
          >
            <img
              style={{ transform: `translateY(${yPos}px)` }}
              src={image.url}
              alt={data.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
