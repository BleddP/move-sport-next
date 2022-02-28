import Slider from '@ui/slider/Slider'
import Button from '@ui/Button'

const Clients = ({clients}) => {
  return (
    <section className="container section">
      <div className="clients">
        <div className='clients__content'>
          <h2>{clients.title}</h2>
          <p>
            {clients.intro}
          </p>
          {clients.button && <Button text={clients.button.text} to={clients.button.url} type={clients.button.type} target={clients.button.target} />}
        </div>
        <div className='clients__reviews'>
            <Slider slides={clients.clients.data} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
