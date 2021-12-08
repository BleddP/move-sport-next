import Image from "next/image";

// Components
import Button from "@UI/Button";

// Content
import Portrait from "@assets/content/chloe.jpeg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={Portrait} />
      </div>
      <div className="card__content">
        <h4>Individueel</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          provident ab fuga nihil at suscipit officia quia cum harum accusamus.
        </p>
        <Button to="/werkwijze/individueel/" text="Lees meer" type="primary" />
      </div>
    </div>
  );
};

export default Card;
