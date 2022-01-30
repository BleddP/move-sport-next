import Slider from '@ui/slider/Slider'

const Clients = ({clients}) => {
  return (
    <section className="container section">
      <div className="clients">
        <div className='clients__content'>
          <h2>{clients.title}</h2>
          <p>
            {clients.intro}
          </p>
        </div>
        <div className='clients__reviews'>
            <Slider slides={clients.clients.data} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
