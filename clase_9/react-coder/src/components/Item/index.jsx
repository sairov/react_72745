import { Link } from "react-router-dom";

const Item = ({ name, img, price, category, dues, id, tag}) => {
    return(
      <article className="item">
        <Link to={`/detalle/${id}`}>
          <picture className="item__picture">
            <span className="item__picture--pill">{tag}</span>
            <img className="item__picture--img item__picture--img--1" src={`/img${img.front}`} alt={`${name} - Figura`} />
            <img className="item__picture--img item__picture--img--2" src={`/img${img.back}`} alt={`${name} - Caja`} />
          </picture>
          <div className="item__info">
            <h3 className="item__info--title">{category}</h3>
            <h4 className="item__info--item">{name}</h4>
            <p className="item__info--price">$ {price} .-</p>
            <p className="item__info--dues"> {dues} CUOTAS SIN INTERÉS</p>
          </div>
        </Link>
      </article>
    );
};

export default Item;