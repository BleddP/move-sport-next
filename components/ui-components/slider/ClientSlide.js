import Image from "next/image";

// Content
import Portrait from "@assets/content/chloe.jpeg";

const ClientSlide = ({ slide }) => {
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header__image">
          <Image src={Portrait} />
        </div>
        <div className="review__header__client">
          <span className="review__header__name">{slide.client_name}</span>
          <span className="review__header__title">{slide.client_position}</span>
        </div>
      </div>
      <p className="review__tagline">{slide.headline}</p>
      <p className="review__content">{slide.review}</p>
    </div>
  );
};

export default ClientSlide;
