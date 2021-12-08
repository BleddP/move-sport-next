import Image from "next/image";

// Content
import Portrait from "@assets/content/chloe.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className='about__content copy'>
            <h2>Over Mij</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
              debitis nihil impedit atque consequuntur aut dolores eum, sit,
              sunt eaque in molestias. Unde, aliquid architecto. Harum et ipsa
              veniam delectus illum, provident eligendi! Labore sunt laborum
              aliquam harum sint, ea, atque quod assumenda voluptatum totam
              dignissimos laboriosam eius rem!
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
