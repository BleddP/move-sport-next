import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Typescript interfaces
import { CardInterface } from '@interfaces'

// Components
import Button from "@components/ui-components/Button";

// Libs
import renderImage from '../helper-functions/renderImage'

const Card = (props: any) => {
  const card: CardInterface = props.card;
  let image = {
    url: ''
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
        <ReactMarkdown>
          {card.content || card.intro}
        </ReactMarkdown>
      </div>


      {card.button &&
        <Button
          to={card.button.to}
          text={card.button.text}
          type={card.button.type}
          target='external'
        />
      }

      {card.buttons &&
        card.buttons.map((button, i) => {
          return (
            <Button
              key={i}
              to={button.url ? button.url : '/'}
              text={button.text}
              type={button.type ? button.type : 'primary'}
              target={button.target ? 'external' : 'internal'}
            />
          )
        })}
    </div>
  );
};

export default Card;
