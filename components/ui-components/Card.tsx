import Image from "next/image";

// Typescript interfaces
import {CardInterface} from '@interfaces'

// Components
import Button from "@components/ui-components/Button";

// Libs
import renderImage from '../helper-functions/renderImage'

const Card = (props: any) => {
  const card: CardInterface = props.card;
  let image = {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  }
  if (card.image.data) {
    image = renderImage(card?.image?.data?.attributes)
  }
  
  return (
    <div className="card">
      {image && (
        <div className="card__image">
          <Image src={image.url} alt={card.title} width={750} height={500} layout="intrinsic" priority={true} />
        </div>
      )}
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
