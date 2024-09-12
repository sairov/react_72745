import { Icon } from '@iconify/react'
import Pill from '../pill';

const CartWidget = () => {

  return (
    <div className='cart-widget'>
      <Pill quantity={0} />
      <Icon className='cart-widget__cart' icon="clarity:shopping-cart-solid" />
    </div>
  );
};

export default CartWidget;