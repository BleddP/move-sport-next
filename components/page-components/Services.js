// Components
import Card from "@components/ui-components/Card";

const Services = ({services}) => {
 
  return (
    <section className="container container--96">
      <div className="services">
        {services.map((service) => {
          service.attributes.image = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          service.attributes.button = {
            to: service.attributes.path,
            text: service.attributes.title,
            type: 'primary',
            target: 'internal',
            
          }
          return <Card card={service.attributes} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
