// Next
import Image from 'next/image'

// Components
import Button from '@ui/Button'

const MethodsServices = ({services}) => {
  const assets = process.env.NEXT_PUBLIC_ASSET_URL

  return (
    <section className="container container--96">
      <div className="our-methods__services">
        {services.map((service) => {
          return (
            <div className="service" key={service.id}>
              <div className="service__image">
                <Image src={assets + service.attributes.image.data.attributes.url} alt={service.attributes.title} width={500} height={400} />
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
