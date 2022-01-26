import Image from "next/image";

// Typescript interfaces
import {CardInterface} from '@interfaces'

// Components
import Button from "@components/ui-components/Button";

const Card = (props: any) => {
  const card: CardInterface = props.card;
  const assets: string = process.env.NEXT_PUBLIC_ASSET_URL
  
  return (
    <div className="card">
      <div className="card__image">
        <Image src={assets + card.image.data.attributes.url} alt={card.title} width={750} height={500} layout="intrinsic" />
      </div>
      <div className="card__content">
        <h4 className="gradient-header">{card.title}</h4>
        <p>{card.content}</p>
        <Button
          to={card.button.to}
          text={card.button.text}
          type={card.button.type}
          target='external'
        />
      </div>
    </div>
  );
};

export default Card;
