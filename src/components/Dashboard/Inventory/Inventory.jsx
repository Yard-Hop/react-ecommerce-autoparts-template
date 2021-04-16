import './Inventory.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useStateValue } from '../../../StateProvider';

const Inventory = () => {
  const [error, setError] = useState(false);
  const [{ user }] = useStateValue();
  const [inventory, setInventory] = useState([]);

  const getInventory = () => {
    let isMounted = true;

    fetch(`/api/productsByUser/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
      .then((parsedData) => setInventory(parsedData))
      .catch(() => {
        if (isMounted) {
          setError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div id="inventory" data-testid="inventory">
      <h1>Inventory</h1>
      <div>
        {
          error && <div>There was an error!</div>
        }
        {
          inventory.map((item) => (
            <div className="inventoryItems" key={item._id} data-testid="inventory-item">
              <h4 className="inventoryItems__title" data-testid="inventory-item-title">{`Title: ${item.title}`}</h4>
              <p data-testid="inventory-item-make">{`Make: ${item.make}`}</p>
              <p data-testid="inventory-item-year">{`Year: ${moment(item.year).format('YYYY')}`}</p>
              <p data-testid="inventory-item-desc">{`Description: ${item.description}`}</p>
              <p data-testid="inventory-item-price">{`Price: ${item.price}`}</p>
              <p data-testid="inventory-item-cond">{`Condition: ${item.condition}`}</p>
              <p data-testid="inventory-item-borough">{`Borough: ${item.borough}`}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Inventory;
