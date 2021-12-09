import Image from "next/image";

// Content
import Portrait from "@assets/content/chloe.jpeg";

const ClientSlide = () => {
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header__image">
          <Image src={Portrait} />
        </div>
        <div className='review__header__client'>
          <span className="review__header__name">Bart Wijnands</span>
          <span className="review__header__title">Co-founder Arble Travel</span>
        </div>
      </div>
      <p className="review__tagline">
        We kunnen er dankzij Chloe weer tegenaan!
      </p>
      <p className="review__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellat
        laborum animi nisi ab quam? Alias obcaecati asperiores expedita
        laudantium quas nisi nostrum. Ratione, enim maxime? Assumenda fugit a
        iste eius saepe distinctio ex, incidunt numquam unde laboriosam iure in
        laudantium nihil cumque dolorem sed aspernatur! Tenetur hic sunt
        placeat?
      </p>
    </div>
  );
};

export default ClientSlide;
