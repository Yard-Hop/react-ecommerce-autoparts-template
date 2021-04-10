/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import UploadImages from './UploadImages';
import { useStateValue } from '../../../StateProvider';

const ListingIndex = () => {
  const [{ user }, dispatch] = useStateValue();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0.00);
  const [borough, setBorough] = useState('none');
  const [description, setDescription] = useState('');
  const [make, setMake] = useState('none');
  const [condition, setCondition] = useState('none');
  const [year, setYear] = useState('none');
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState();
  const [isFiledPicked, setIsFiledPicked] = useState(false);

  const uploadProduct = () => {
    // sends the fetch request of product info & image upload
    fetch('', {
      method: 'POST',
      headers: '',
      body: JSON.stringify({
        title,
        price,
        borough,
        description,
        make,
        condition,
        year,
        sellerID: user.id,
        selectedFile,
      }),
    });
  };

  if (step === 1) {
    console.log('inside step is 1');
    return (
      <ProductForm
        title={title}
        price={price}
        borough={borough}
        description={description}
        make={make}
        condition={condition}
        year={year}
        setTitle={setTitle}
        setPrice={setPrice}
        setBorough={setBorough}
        setDescription={setDescription}
        setMake={setMake}
        setCondition={setCondition}
        setYear={setYear}
        setStep={setStep}
      />
    );
  }
  if (step === 2) {
    return (
      <UploadImages
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        isFiledPicked={isFiledPicked}
        setIsFiledPicked={setIsFiledPicked}
        uploadProduct={uploadProduct}
        setStep={setStep}
      />
    );
  }
  return <noscript />;
};

export default ListingIndex;
