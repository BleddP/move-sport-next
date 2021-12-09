import Slider from '@ui/slider/Slider'

const Clients = () => {
  return (
    <section className="container container--96">
      <div className="clients">
        <div className='clients__content'>
          <h2>Partners & Klanten</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere
            alias dignissimos quae amet quis modi iusto, ex exercitationem
            placeat!
          </p>
        </div>
        <div className='clients__reviews'>
            <Slider />
        </div>
      </div>
    </section>
  );
};

export default Clients;
