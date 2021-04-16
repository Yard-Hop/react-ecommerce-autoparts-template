/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductForm.css';

const ProductForm = ({
  title,
  price,
  borough,
  description,
  make,
  condition,
  year,
  setTitle,
  setPrice,
  setBorough,
  setDescription,
  setMake,
  setCondition,
  setYear,
  setStep,
}) => {
  const submitProduct = (event) => {
    event.preventDefault();

    if (
      title.length > 0
      && price > 0
      && borough.length > 0
      && description.length > 0
      && make.length > 0 > 0
      && condition.length > 0
      && year.length > 0
    ) {
      setStep(2);
    }
  };

  const clearFields = () => {
    setTitle('');
    setPrice(0.0);
    setBorough('none');
    setDescription('');
    setMake('none');
    setCondition('none');
    setYear('none');
  };

  return (
    <div className="productForm__container" data-testid="product-form">
      <div className="productForm">
        <h2>New Product Listing</h2>

        <form>
          <div className="productForm__main">
            <div className="productForm__main1">
              <label className="form__title__cont" htmlFor="form__title">
                <h3>Product Title:</h3>
                <input
                  name="title"
                  type="text"
                  id="form__title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label className="form__price__cont" htmlFor="form__price">
                <h3>Price:</h3>
                <input
                  name="price"
                  type="number"
                  id="form__price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>

              <label className="form__location__cont" htmlFor="form__location">
                <h3>Borough:</h3>
                <select
                  name="borough"
                  id="form__location"
                  value={borough}
                  onChange={(e) => setBorough(e.target.value)}
                >
                  <option value="none" disabled>
                    Select
                  </option>
                  <option value="Bronx">Bronx</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
              </label>
            </div>

            <div className="productForm__main2">
              <label
                className="form__description__cont"
                htmlFor="form__description"
              >
                <h3>Description</h3>
                <textarea
                  rows="10"
                  name="description"
                  type="text"
                  id="form__description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="productForm__details__cont">
            <h3>Product Details</h3>
            <div className="productForm__details">
              <label htmlFor="form__manufacturer">
                <h4>Make/Manufacturer</h4>
                <select
                  name="make"
                  id="form__manufacturer"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                >
                  <option value="none" disabled>
                    Select
                  </option>
                  <option value="Ford">Ford</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Honda">Honda</option>
                  <option value="Mini">Mini</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Porsche">Porsche</option>
                </select>
              </label>

              <label htmlFor="form__condition">
                <h4>Condition</h4>
                <select
                  name="condition"
                  id="form__condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  <option value="none" disabled>
                    Select
                  </option>
                  <option value="Like New">Like New</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Salvage">Salvage</option>
                </select>
              </label>

              <label htmlFor="form__year">
                <h4>Year</h4>
                <select
                  name="year"
                  id="form__year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="none" disabled>
                    Select
                  </option>
                  {(() => {
                    // Create an array of all the years from 2021 to 1930
                    const years = [];
                    for (let i = 2021; i > 1929; i -= 1) years.push(i);
                    // Render an option for each of those years
                    return years.map((yr) => (
                      <option key={yr.toString()} value={yr.toString()}>
                        {yr}
                      </option>
                    ));
                  })()}
                </select>
              </label>
            </div>
          </div>
          <div className="form__buttons">
            <Link
              to="/dashboard/newProduct/uploadImages"
              onClick={submitProduct}
            >
              <button type="button" className="button__createListing">
                Continue
              </button>
            </Link>
            <button
              type="button"
              onClick={clearFields}
              className="button__clearListing"
            >
              Clear All Fields
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
