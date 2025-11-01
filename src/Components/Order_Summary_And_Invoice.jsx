// Section 4 – Order Summary / Invoice
// ● Show Customer Name and Order Date
// ● Show tables for Stationery and Printing items with totals
// ● Show Tax, Delivery Charge, Grand Total
// ● Generate a simple unique Order ID
// Logical Thinking:
// ● Ensure all totals match the order items
// ● Display a clean and readable summary

// take all things form the query url

import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderSummary() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const s = location.state || {};

    const parseNumber = (v) => {
        const n = Number(v);
        return Number.isFinite(n) ? n : 0;
    };

    const stationeryTotal = parseNumber(s.stationeryTotal ?? params.get('stationeryTotal'));
    const printingTotal = parseNumber(s.printingTotal ?? params.get('printingTotal'));
    const tax = parseNumber(s.tax ?? params.get('tax') ?? 0.1 * (stationeryTotal + printingTotal));
    const deliveryCharge = parseNumber(s.deliveryCharge ?? params.get('deliveryCharge') ?? 50);
    const grandTotal = parseNumber(s.grandTotal ?? params.get('grandTotal') ?? stationeryTotal + printingTotal + tax + deliveryCharge);

    return (
        <div className="max-w-2xl mx-auto p-6 border rounded shadow mt-10 mb-10 bg-white">
            <h1 className="text-2xl font-bold mb-4">Order Summary & Invoice</h1>
            <p><strong>Order ID:</strong> {s.orderID ?? params.get('orderID') ?? '—'}</p>
            <p><strong>Customer:</strong> {s.customerName ?? params.get('customerName') ?? 'Guest'}</p>
            <p><strong>Date:</strong> {s.orderDate ?? params.get('orderDate') ?? new Date().toLocaleString()}</p>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">Totals</h2>
                <p>Stationery: ₹{stationeryTotal.toFixed(2)}</p>
                <p>Printing: ₹{printingTotal.toFixed(2)}</p>
                <p>Tax (10%): ₹{tax.toFixed(2)}</p>
                <p>Delivery: ₹{deliveryCharge.toFixed(2)}</p>
                <h3 className="text-xl font-bold mt-2">Grand Total: ₹{grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default OrderSummary;
