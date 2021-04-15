import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';
import { useStateValue } from '../../StateProvider';

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();

  const deleteItem = (id) => {
    // eslint-disable-next-line no-console

    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };

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
                deleteItem={deleteItem}
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
