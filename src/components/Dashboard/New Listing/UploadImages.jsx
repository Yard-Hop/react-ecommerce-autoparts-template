/* eslint-disable */
import React from 'react';
import './ProductForm.css';
import { useStateValue } from '../../../StateProvider';

// Does not properly work. Use postman for testing only.
const UploadImages = ({
  selectedFile,
  setSelectedFile,
  isFiledPicked,
  setIsFiledPicked,
  uploadProduct,
  setStep,
}) => {
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFiledPicked(true);
  };

  return (
    <div>
      <label htmlFor="form__uploadbutton">
        <h3>Upload Images</h3>
        <input type="file" name="file" onChange={changeHandler} />
        {isFiledPicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size: {selectedFile.size}</p>
            <p>lastModifiedDate:{' '} {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
          </div>
        ) : (
          <p>select a file to show details</p>
        )}
      </label>
      <br />
      <button type="button" onClick={uploadProduct}>Upload</button>
      <button onClick={() => setStep(1)}>Back</button>
    </div>
  );
};

export default UploadImages;
