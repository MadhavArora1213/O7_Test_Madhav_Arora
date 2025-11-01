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
function OrderSummaryAndInvoice({customerName, orderDate, orderID, stationeryItems, printingItems, stationeryTotal, printingTotal, tax, deliveryCharge, grandTotal}) {
    return (
        <div className="max-w-3xl mx-auto p-4 border rounded shadow mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">Order Summary / Invoice</h2>
            <div className="mb-4">
                <p><strong>Customer Name:</strong> {customerName}</p>
                <p><strong>Order Date:</strong> {orderDate}</p>
                <p><strong>Order ID:</strong> {orderID}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Stationery Items</h3>
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th className="border p-2">Item</th>
                            <th className="border p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stationeryItems.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">₹{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-2"><strong>Stationery Total:</strong> ₹{stationeryTotal}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Printing Items</h3>
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th className="border p-2">Item</th>
                            <th className="border p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {printingItems.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">₹{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-2"><strong>Printing Total:</strong> ₹{printingTotal}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Order Summary</h3>
                <p><strong>Subtotal:</strong> ₹{stationeryTotal + printingTotal}</p>
                <p><strong>Tax:</strong> ₹{tax}</p>
                <p><strong>Delivery Charge:</strong> ₹{deliveryCharge}</p>
                <p className="font-bold"><strong>Grand Total:</strong> ₹{grandTotal}</p>
            </div>
        </div>
    );
}

export default OrderSummaryAndInvoice;
