import Image from "next/image";

// Typescript interfaces
import {CardInterface} from '@interfaces'

// Components
import Button from "@components/ui-components/Button";

const Card = (props: any) => {
  const card: CardInterface = props.card;

  return (
    <div className="card">
      <div className="card__image">
        <Image src={card.image} />
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
