// Section 1 – Stationery Items Form
// ● Product dropdown: Pen ₹10, Notebook ₹50, Stapler ₹120, Marker ₹30
// ● Quantity input
// ● Unit price auto-filled based on product
// ● Simple discount:
// ○ 10% discount if quantity > 20
// ○ Otherwise no discount
// Deliverable:
// ● Display Product, Quantity, Unit Price, Subtotal, Discount, Total
// Good Ui/UX with Tailwind CSS

//place order that for now go to combined calculation and tax page
import React, { useState, useEffect } from 'react';

const products = {
    Pen: 10,
    Notebook: 50,
    Stapler: 120,
    Marker: 30
};  
function StationeryItemsForm() {
    const [product, setProduct] = useState('Pen');
    const [quantity, setQuantity] = useState(1);
    const [unitPrice, setUnitPrice] = useState(products[product]);
    const [subtotal, setSubtotal] = useState(unitPrice * quantity);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(subtotal - discount);
    useEffect(() => {
        setUnitPrice(products[product]);
    }
    , [product]);
    useEffect(() => {
        const newSubtotal = unitPrice * quantity;
        setSubtotal(newSubtotal);
        const newDiscount = quantity > 20 ? newSubtotal * 0.1 : 0;
        setDiscount(newDiscount);
        setTotal(newSubtotal - newDiscount);
    }
    , [unitPrice, quantity]);
    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Stationery Items Order Form</h2>
            <div className="mb-4">
                <label className="block mb-2">Product:</label>
                <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    {Object.keys(products).map((key) => (
                        <option key={key} value={key}>
                            {key} - ₹{products[key]}
                        </option>
                    ))}
                </select>
            </div>  
            <div className="mb-4">
                <label className="block mb-2">Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Unit Price:</label>
                <input
                    type="text"
                    value={`₹${unitPrice}`}
                    readOnly
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Subtotal:</label>
                <input
                    type="text"
                    value={`₹${subtotal}`}
                    readOnly
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Discount:</label>
                <input
                    type="text"
                    value={`₹${discount}`}
                    readOnly
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Total:</label>
                <input
                    type="text"
                    value={`₹${total}`}
                    readOnly
                    className="w-full p-2 border rounded"
                />
            </div>
            {/* // Add a submit button (non-functional for now) */}

          <button className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500">
                Place Order
            </button>
        </div>
    );
}

export default StationeryItemsForm;
