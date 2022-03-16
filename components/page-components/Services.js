// Components
import Card from "@components/ui-components/Card";

const Services = ({ services }) => {
  return (
    <section className="container section">
      <div className="services">
        {services.map((service) => {
          service.attributes.button = {
            to: service.attributes.path,
            text: service.attributes.title,
            type: "primary",
            target: "internal",
          };
          return <Card card={service.attributes} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
