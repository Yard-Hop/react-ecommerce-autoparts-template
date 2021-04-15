import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const CatalogProduct = ({
  id,
  title,
  price,
  make,
  year,
  condition,
  description,
  borough,
}) => (
  <div className="catalogProduct">
    <Link to={`/catalog${id}`}>
      <h4 className="catalogProduct__title" data-testid="catalog-product-title">{title}</h4>
    </Link>
    <small>$</small>
    <strong data-testid="catalog-product-price">{price}</strong>
    <p data-testid="catalog-product-make">{make}</p>
    <p data-testid="catalog-product-year">{moment(year).format('YYYY')}</p>
    <p className="catalogProduct__description" data-testid="catalog-product-desc">{description}</p>
    { condition && <p>{condition}</p> }
    <p data-testid="catalog-product-borough">{borough}</p>
  </div>
);

export default CatalogProduct;

CatalogProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  borough: PropTypes.string.isRequired,
  condition: PropTypes.string,
};

CatalogProduct.defaultProps = {
  condition: null,
};
