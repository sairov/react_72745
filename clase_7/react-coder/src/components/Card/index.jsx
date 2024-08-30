import Title from "../Title";

import './index.css'

const Card = ({title, price, img, link, type}) => {

  return (
    <article className={`card card--${type}`}>
      <Title  className="card__title" heading="h4" text={title}/>
      <img src={img} alt="" />
      <p className="card__description" >$ {price}</p>
      <a className="card__link" href={link}>Ir al producto</a>
    </article>
  );
};

export default Card;