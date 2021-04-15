import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import './Catalog.css';
import CatalogProduct from './CatalogProduct';

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let isMounted = true;

    fetch('/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        // Check if the component is mounted to prevent a memory leak
        if (isMounted) {
          setCatalog(data.products);
        }
      })
      // eslint-disable-next-line no-console
      .catch(() => {
        if (isMounted) {
          setError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="catalog__container" data-testid="catalog">
      <div className="catalog">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__productCont">
          {
            error && <div>There was an error!</div>
          }
          {catalog.map((item) => (
            <CatalogProduct
              key={item._id}
              id={item._id}
              title={item.title}
              price={item.price}
              make={item.make}
              year={item.year}
              condition={item.condition}
              description={item.description}
              borough={item.borough}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
