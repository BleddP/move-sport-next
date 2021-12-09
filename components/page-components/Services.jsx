// Components 
import Card from '@UI/Card'

import Portrait from "@assets/content/chloe.jpeg";

const Services = () => {
    const services = [
        {
            id: 1,
            image: Portrait,
            title: 'Individueel',
            content: 'Hier komt nog wat tekst te staan allemaal',
            button: {
              to: '/werkwijze/individueel/',
              type: 'primary',
              text: 'Lees meer'
            }
        },
        {
          id: 2,
          image: Portrait,
          title: 'Teams',
          content: 'Hier komt nog wat tekst te staan allemaal',
          button: {
            to: '/werkwijze/teams/',
            type: 'primary',
            text: 'Lees meer'
          }
        },
        {
          id: 3,
          image: Portrait,
          title: 'Zakelijk',
          content: 'Hier komt nog wat tekst te staan allemaal',
          button: {
            to: '/werkwijze/individueel/',
            type: 'primary',
            text: 'Lees meer'
          }
        }
    ]
  return (
    <section className="container container--96">
      <div className="services">
        {services.map(service => {
            return <Card data={service} key={service.id} />
        })}
      </div>
    </section>
  );
};

export default Services;
