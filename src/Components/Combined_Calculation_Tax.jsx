// Section 3 – Combined Calculation & Tax
// ● Calculate subtotal for stationery and subtotal for printing
// ● Apply tax 10% on total (simplified)
// ● Add fixed delivery charge ₹50
// Deliverable:
// ● Display Grand Total = Stationery + Printing + Tax + 

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Combined_Calculation_Tax({stationeryTotal, printingTotal}) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);

    // values from navigate state (preferred)
    const stateValues = location.state || {};

    // helper to parse fallback sources and ensure numbers
    const parseNumber = (v) => {
        const n = Number(v);
        return Number.isFinite(n) ? n : 0;
    };

    const stationery = parseNumber(
        typeof stationeryTotal !== 'undefined' && stationeryTotal !== null
            ? stationeryTotal
            : stateValues.stationeryTotal ?? params.get('stationeryTotal')
    );

    const printing = parseNumber(
        typeof printingTotal !== 'undefined' && printingTotal !== null
            ? printingTotal
            : stateValues.printingTotal ?? params.get('printingTotal')
    );

    const deliveryCharge = 50;
    const tax = 0.1 * (stationery + printing);
    const grandTotal = stationery + printing + tax + deliveryCharge;

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Combined Calculation & Tax</h2>
            <div className="mb-2">
                <p>Stationery Total: ₹{stationery.toFixed(2)}</p>
                <p>Printing Total: ₹{printing.toFixed(2)}</p>
                <p>Tax (10%): ₹{tax.toFixed(2)}</p>
                <p>Delivery Charge: ₹{deliveryCharge.toFixed(2)}</p>
                <h3 className="text-lg font-bold">Grand Total: ₹{grandTotal.toFixed(2)}</h3>
            </div>

            <div className="mt-4">
                <button
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400"
                    onClick={() => {
                        // prepare order data (numbers kept as numbers)
                        const orderID = `ORD${Date.now()}`;
                        const customerName = "John Doe";
                        const orderDate = new Date().toLocaleString();
                        const orderData = {
                            customerName,
                            orderDate,
                            orderID,
                            stationeryTotal: stationery,
                            printingTotal: printing,
                            tax,
                            deliveryCharge,
                            grandTotal
                        };
                        // build query string as fallback (encode values)
                        const qs = new URLSearchParams({
                            orderID,
                            customerName,
                            orderDate,
                            stationeryTotal: String(stationery),
                            printingTotal: String(printing),
                            tax: String(tax),
                            deliveryCharge: String(deliveryCharge),
                            grandTotal: String(grandTotal)
                        }).toString();
                        // navigate with both state and query params
                        navigate(`/order-summary?${qs}`, { state: orderData });
                    }}
                >
                    View Order Summary & Invoice
                </button>
            </div>
        </div>
    );
}

export default Combined_Calculation_Tax;
