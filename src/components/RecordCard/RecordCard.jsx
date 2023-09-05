import s from "./RecordCard.module.css";

const RecordCard = ({ title, number, icon }) => {
  return (
    <section className={`flex ${s.container}`}>
      <img src={icon} alt={title} />
      <div>
        <h6>{title}</h6>
        <p>{number}</p>
      </div>
    </section>
  );
};

export default RecordCard;
