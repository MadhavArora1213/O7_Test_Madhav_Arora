// Section 2 – Printing Services Form
// ● Input: Number of pages
// ● Print Type: Black & White (₹5/page), Color (₹10/page)
// ● Urgent Delivery checkbox (+₹50 if checked)
// ● Simple discount:
// ○ 10% discount if pages > 100
// Deliverable:
// ● Display Pages, Print Type, Urgency Fee, Subtotal, Discount, Total
// With good UI/UX using Tailwind CSS

import React, { useState, useEffect } from 'react';
function PrintingServicesForm() {
    const [pages, setPages] = useState(1);
    const [printType, setPrintType] = useState('Black & White');
    const [isUrgent, setIsUrgent] = useState(false);
    const [unitPrice, setUnitPrice] = useState(5);
    const [subtotal, setSubtotal] = useState(unitPrice * pages);
    const [urgencyFee, setUrgencyFee] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(subtotal + urgencyFee - discount);
    useEffect(() => {
        setUnitPrice(printType === 'Black & White' ? 5 : 10);
    }
    , [printType]);
    useEffect(() => {
        const newSubtotal = unitPrice * pages;
        setSubtotal(newSubtotal);
        const newUrgencyFee = isUrgent ? 50 : 0;
        setUrgencyFee(newUrgencyFee);
        const newDiscount = pages > 100 ? newSubtotal * 0.1 : 0;
        setDiscount(newDiscount);
        setTotal(newSubtotal + newUrgencyFee - newDiscount);
    }
    , [unitPrice, pages, isUrgent]);
    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Printing Services Order Form</h2>
            <div className="mb-4">
                <label className="block mb-2">Number of Pages:</label>
                <input
                    type="number"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Print Type:</label>
                <select
                    value={printType}
                    onChange={(e) => setPrintType(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="Black & White">Black & White (₹5/page)</option>
                    <option value="Color">Color (₹10/page)</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isUrgent}
                        onChange={(e) => setIsUrgent(e.target.checked)}
                        className="mr-2"
                    />
                    Urgent Delivery (+₹50)
                </label>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <p>Pages: {pages}</p>
                <p>Print Type: {printType}</p>
                <p>Urgency Fee: ₹{isUrgent ? 50 : 0}</p>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Discount: ₹{discount}</p>
                <p>Total: ₹{total}</p>
            </div>
            {/* Submit Button */}
            <div className="mb-4">
                <button className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500">Place Order</button>
            </div>
        </div>
    );
}

export default PrintingServicesForm;
