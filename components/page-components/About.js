import Image from "next/image";

// Content
import Portrait from "@assets/content/chloe.jpeg";

const About = ({data}) => {
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
            <Image src={Portrait} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
