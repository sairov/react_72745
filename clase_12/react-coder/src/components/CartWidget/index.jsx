import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { Icon } from '@iconify/react'
import Pill from '../pill';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className='cart-widget'>
      <Pill quantity={cartItems.length} />
      <Icon className='cart-widget__cart' icon="clarity:shopping-cart-solid" />
    </div>
  );
};

export default CartWidget;