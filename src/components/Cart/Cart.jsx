import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';
import { useStateValue } from '../../StateProvider';

const Cart = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="cart" data-testid="cart">
      <div className="cart__left">
        <div>
          <h2 className="cart__title">Your Shopping Cart</h2>
          <div className="cart__items">
            {cart.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                location={item.location}
                condition={item.condition}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
