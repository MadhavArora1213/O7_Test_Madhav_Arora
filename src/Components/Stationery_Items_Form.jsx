// make a stationery items form component

import React from 'react';
import Footer from './Footer';

function StationeryItemsForm() {
  return (
    <div>
      <h1>Stationery Items Form</h1>
      <form>
        <label>
          Item Name:
          <input type="text" name="itemName" />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" />
        </label>
        <label>
          Price:
          <input type="number" name="price" />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <Footer />
    </div>
  );
}

export default StationeryItemsForm;
