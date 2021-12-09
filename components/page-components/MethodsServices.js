// Next
import Image from 'next/image'

// Components
import Button from '@ui/Button'

// Content
import Portrait from "@assets/content/chloe.jpeg";

const MethodsServices = () => {
  const services = [
    {
      id: 1,
      image: Portrait,
      title: "Individueel",
      content: "Hier komt nog wat tekst te staan allemaal",
      button: {
        to: "/werkwijze/individueel/",
        type: "primary",
        text: "Lees meer",
      },
    },
    {
      id: 2,
      image: Portrait,
      title: "Teams",
      content: "Hier komt nog wat tekst te staan allemaal",
      button: {
        to: "/werkwijze/teams/",
        type: "primary",
        text: "Lees meer",
      },
    },
    {
      id: 3,
      image: Portrait,
      title: "Zakelijk",
      content: "Hier komt nog wat tekst te staan allemaal",
      button: {
        to: "/werkwijze/individueel/",
        type: "primary",
        text: "Lees meer",
      },
    },
  ];

  return (
    <section className="container container--96">
      <div className="our-methods__services">
        {services.map((service) => {
          return (
            <div className="service" key={service.id}>
              <div className="service__image">
                <Image src={Portrait} alt={service.title} />
              </div>
              <div className="service__content">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                  <Button to={service.button.to} text={service.button.text} type='primary' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MethodsServices;
