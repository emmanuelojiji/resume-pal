import "./TipCard.scss";

const TipCard = ({title, description}) => {
  return (
    <div className="TipCard">
      <h4>{title}</h4>
      <p>
        {description}
      </p>
    </div> 
  );
};

export default TipCard;
