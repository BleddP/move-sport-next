// Libs
import renderImage from '../helper-functions/renderImage'

const About = ({data}) => {

  const image = renderImage(data.image.data.attributes)

  return (
    <section className="about">
      <div className="container container--48">
        <div className="about__content">
          <div className='about__content copy'>
            <h2>{data.title}</h2>
            <p>
              {data.intro}
            </p>
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
