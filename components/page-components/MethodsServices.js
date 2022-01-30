// Components
import Button from '@ui/Button'
import renderImage from '../helper-functions/renderImage'

const MethodsServices = ({services}) => {
  return (
    <section className="container container--96">
      <div className="our-methods__services">
        {services.map((service) => {
          const image = renderImage(service.attributes.image.data.attributes)
          return (
            <div className="service" key={service.id}>
              <div className="service__image">
                <img src={image.url} alt={service.attributes.title} width={500} height={400} />
              </div>
              <div className="service__content">
                  <h4>{service.attributes.title}</h4>
                  <p>{service.attributes.content}</p>
                  <Button to={service.attributes.path} target="internal" text={service.attributes.title} type='primary' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MethodsServices;
