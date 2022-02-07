import Image from "next/image";

// Libs
import renderImage from '../helper-functions/renderImage'

const About = ({data}) => {

  const image = renderImage(data.image.data.attributes)

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className='about__content copy'>
            <h2>{data.title}</h2>
            <p>
              {data.intro}
            </p>
          </div>
          <div className="about__content image">
          <img src={image.url} alt={data.title} width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
