import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './CartProduct.css';

const CartProduct = (props) => {
  const {
    id,
    title,
    price,
    image,
    location,
    condition,
    deleteItem,
  } = props;

  return (
    <div className="cartProduct">
      <div className="cartProduct__image">
        <img src={image} alt="" data-testid="cart-product-image" />
      </div>
      <div className="cartProduct__info">
        <p className="cartProduct__title" data-testid="cart-product-title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong data-testid="cart-product-price">{price}</strong>
        </p>
        <p className="cartProduct__condition" data-testid="cart-product-condition">{`Condition: ${condition}`}</p>
        <p className="cartProduct__location">
          <LocationOnIcon />
          <span data-testid="cart-product-location">{location.borough}</span>
        </p>
        <button type="button" onClick={() => deleteItem(id)} data-testid="remove-from-cart">Remove from Cart</button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartProduct;
