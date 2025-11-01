// Section 3 – Combined Calculation & Tax
// ● Calculate subtotal for stationery and subtotal for printing
// ● Apply tax 10% on total (simplified)
// ● Add fixed delivery charge ₹50
// Deliverable:
// ● Display Grand Total = Stationery + Printing + Tax + 

import React from 'react';
function Combined_Calculation_Tax({stationeryTotal, printingTotal}) {
    const deliveryCharge = 50;
    const tax = 0.1 * (stationeryTotal + printingTotal);
    const grandTotal = stationeryTotal + printingTotal + tax + deliveryCharge;
    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Combined Calculation & Tax</h2>
            <div className="mb-2">
                <p>Stationery Total: ₹{stationeryTotal}</p>
                <p>Printing Total: ₹{printingTotal}</p>
                <p>Tax (10%): ₹{tax}</p>
                <p>Delivery Charge: ₹{deliveryCharge}</p>
                <h3 className="text-lg font-bold">Grand Total: ₹{grandTotal}</h3>
            </div>
        </div>
    );
}

export default Combined_Calculation_Tax;
