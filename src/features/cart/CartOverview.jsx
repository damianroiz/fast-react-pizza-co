import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import {formatCurrency} from '../../utils/helpers'


function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

  if(!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200">
      <p className="font-semibold uppercase text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(getTotalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
