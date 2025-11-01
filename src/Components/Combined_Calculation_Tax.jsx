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
            {/* // take total values from props and show here */}
            <div className="mb-2">
                <p>Stationery Total: ₹{stationeryTotal}</p>
                <p>Printing Total: ₹{printingTotal}</p>
                <p>Tax (10%): ₹{tax}</p>
                <p>Delivery Charge: ₹{deliveryCharge}</p>
                <h3 className="text-lg font-bold">Grand Total: ₹{grandTotal}</h3>

            </div>
            {/* // button of order summary and invoice page */}
            {/* onclick calculate the summary and redirect to order summary and invoice page and shown the order summary */}
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    // Navigate to the Order Summary and Invoice page
                    // Pass the necessary props
                    const customerName = "John Doe"; // Example data
                    const orderDate = new Date().toLocaleDateString();
                    const orderID = "ORD123456";
                    const stationeryItems = [{name: "Sample Stationery Item", total: stationeryTotal}];
                    const printingItems = [{name: "Sample Printing Item", total: printingTotal}];
                    const url = `/order-summary?customerName=${encodeURIComponent(customerName)}&orderDate=${encodeURIComponent(orderDate)}&orderID=${encodeURIComponent(orderID)}&stationeryTotal=${stationeryTotal}&printingTotal=${printingTotal}&tax=${tax}&deliveryCharge=${deliveryCharge}&grandTotal=${grandTotal}`;
                    window.location.href = url;                    
                }}>
                    View Order Summary & Invoice
                </button>
            </div>
        </div>
    );
}

export default Combined_Calculation_Tax;
