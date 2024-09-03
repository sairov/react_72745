const ItemDetail = ({ name, img, price, description, category}) => {
  return (
    <section className="item-detail">
      <picture className="item-detail__picture">
          <img className="item-detail__picture--img item-detail__picture--img--1" src={`/img${img?.front}`} alt={`${name} - Figura`} />
          <img className="item-detail__picture--img item-detail__picture--img--2" src={`/img${img?.back}`} alt={`${name} - Caja`} />
      </picture>
      <article className="item-detail__info">
          <p className="item-detail__info--licence">{category}</p>
          <h2 className="item-detail__info--name">{name}</h2>
          <p className="item-detail__info--description">{description}</p>
          <p className="item-detail__info--price">$ {price}</p>
          <form className="item-detail__form" action="" method="POST" encType="application/x-www-form-urlencoded">
              <div className="item-detail__form--container">
                  <button className="item-detail__form--btn" type="button">-</button>
                  <input className="item-detail__form--input" type="text" placeholder="0" />
                  <button className="item-detail__form--btn" type="button">+</button>
              </div>
              <input className="item-detail__form--submit" type="submit" value="Agregar al Carrito" />
          </form>
      </article>
    </section>
  );
};

export default ItemDetail;