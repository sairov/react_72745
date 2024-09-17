import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="container not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">No encontramos lo que estabas buscando.</p>
      <Link className="not-found__link" to={'/'}>Volver a inicio</Link>
    </section>
  )
}

export default Error404;