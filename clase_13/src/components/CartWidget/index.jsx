import { useContext } from "react";
import { Icon } from '@iconify/react';

import { CartContext } from "../../context/cartContext";
import Pill from '../pill';

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  const quantity = cart.length > 0
    ? cart.map(item => item.quantity).reduce((acc, ant) => ant + acc)
    : 0;

  return (
    <div className='cart-widget'>
      <Pill quantity={quantity} />
      <Icon className='cart-widget__cart' icon="clarity:shopping-cart-solid" />
    </div>
  );
};

export default CartWidget;