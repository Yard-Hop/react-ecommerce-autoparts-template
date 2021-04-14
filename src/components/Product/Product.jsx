import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Product.css';
import { useStateValue } from '../../StateProvider';

const Product = (props) => {
  const [, dispatch] = useStateValue();

  const {
    id,
    title,
    price,
    image,
    location,
    condition,
  } = props;

  const addToCart = () => {
    // dispatch item to the data layer
    // eslint-disable-next-line no-console

    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        location,
        condition,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title" data-testid="product-title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{`Condition: ${condition}`}</p>
        <p className="product__location">
          <LocationOnIcon />
          <span>{location.borough}</span>
        </p>
      </div>
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <button type="button" onClick={addToCart} data-testid="add-to-cart">Add to Cart</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};

export default Product;
