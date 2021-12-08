// Components 
import Card from '@UI/Card'

const Services = () => {
    const services = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3
        }
    ]
  return (
    <section className="container">
      <div className="services">
        {services.map(service => {
            return <Card data={service} key={service.id} />
        })}
      </div>
    </section>
  );
};

export default Services;
