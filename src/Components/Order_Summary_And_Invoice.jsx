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
    const deliveryCharge = parseNumber(s.deliveryCharge ?? params.get('deliveryCharge') ?? 50);
    const tax = parseNumber(s.tax ?? params.get('tax') ?? 0.1 * (stationeryTotal + printingTotal));
    const grandTotal = parseNumber(s.grandTotal ?? params.get('grandTotal') ?? (stationeryTotal + printingTotal + tax + deliveryCharge));

    const orderID = s.orderID ?? params.get('orderID') ?? `ORD${Date.now()}`;
    const customerName = s.customerName ?? params.get('customerName') ?? 'Guest';
    const orderDate = s.orderDate ?? params.get('orderDate') ?? new Date().toLocaleString();

    return (
        <div className="max-w-2xl mx-auto p-6 border rounded shadow mt-10 mb-10 bg-white">
            <h1 className="text-2xl font-bold mb-4">Order Summary & Invoice</h1>

            <div className="mb-4">
                <p><strong>Order ID:</strong> {orderID}</p>
                <p><strong>Customer:</strong> {customerName}</p>
                <p><strong>Date:</strong> {orderDate}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-semibold">Totals</h2>
                <div className="mt-2 space-y-1">
                    <p>Stationery: <span className="font-medium">₹{stationeryTotal.toFixed(2)}</span></p>
                    <p>Printing: <span className="font-medium">₹{printingTotal.toFixed(2)}</span></p>
                    <p>Tax (10%): <span className="font-medium">₹{tax.toFixed(2)}</span></p>
                    <p>Delivery: <span className="font-medium">₹{deliveryCharge.toFixed(2)}</span></p>
                </div>
                <h3 className="text-xl font-bold mt-4">Grand Total: ₹{grandTotal.toFixed(2)}</h3>
            </div>

            <div className="mt-6">
                <p className="text-sm text-gray-600">This is a simple invoice generated from the data passed by the app. If values are missing, defaults are used.</p>
            </div>
        </div>
    );
}

export default OrderSummary;
