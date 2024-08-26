import Title from "../Title";

import './index.css'

const Card = ({title, description, link, type}) => {

  return (
    <article className={`card card--${type}`}>
      <Title  className="card__title" heading="h4" text={title}/>
      <p className="card__description" >{description}</p>
      <a className="card__link" href={link.href}>{link.text}</a>
    </article>
  );
};

export default Card;