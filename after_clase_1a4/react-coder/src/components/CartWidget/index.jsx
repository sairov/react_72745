import { Icon } from '@iconify/react'
import Pill from '../pill';

import './index.css';
const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <Pill quantity={2} />
      <Icon className='cart-widget__cart' icon="clarity:shopping-cart-solid" />
    </div>
  );
};

export default CartWidget;