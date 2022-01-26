import Image from "next/image";

const ClientSlide = ({ slide }) => {
  const assets = process.env.NEXT_PUBLIC_ASSET_URL

  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header__image">
          <Image src={assets + slide.image.data.attributes.url} width={50} height={50} fill="responsive" />
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
