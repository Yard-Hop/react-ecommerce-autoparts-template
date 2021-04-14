import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { loadStripe } from '@stripe/stripe-js';
import { useStateValue } from '../../StateProvider';

const stripePromise = loadStripe('pk_test_51IdmSzCtjOL0VwivxshnQAmGNBlPWmvvlSicCp2xxpNLUuIdNAAxlYaay2ejYhZvNRIJd6PY0XFABYntzDBKYpm100zqnZEenc');

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  const validateCheckOut = () => {
    if (cart.length < 1) return false;
    return true;
  };

  const checkoutButton = async (event) => {
    event.preventDefault();
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const lineItems = [];

    cart.forEach((element) => {
      lineItems.push(
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: element.title,
            },
            unit_amount: element.price * 100,
          },
          quantity: 1,
        },
      );
    });

    const response = await fetch('/api/create-checkout-session',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(lineItems),
      });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={cart.reduce((acc, curr) => (acc + curr.price), 0)}
        renderText={(value) => (
          <>
            <p data-testid="subtotal">
              Subtotal (
              {`${cart?.length} `}
              items):
              <strong>
                {` ${value}`}
              </strong>
            </p>
          </>
        )}
        decimalValue={2}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      <button type="button" disabled={!validateCheckOut()} onClick={(e) => checkoutButton(e)}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
