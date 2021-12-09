import Image from "next/image";

// Components
import Button from "@UI/Button";

const Card = ({data}) => {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={data.image} />
      </div>
      <div className="card__content">
        <h4 className='gradient-header'>{data.title}</h4>
        <p>
          {data.content}
        </p>
        <Button to={data.button.to} text={data.button.text} type={data.button.type}/>
      </div>
    </div>
  );
};

export default Card;
