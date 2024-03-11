import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import '../styles/order.css';
import MyCalendar from "./Calender";


const initialOrders = [
    { id: 1, orderId: 'ORD001', customerName: 'John Doe', orderDate: '2024-03-09', status: 'Pending' },
    { id: 2, orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '2024-03-10', status: 'Processing' },
];

const Orders = ({navigateTo}) => {
    const [orders, setOrders] = useState(initialOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const viewOrderDetails = (orderId) => {
        const order = orders.find(order => order.orderId === orderId);
        setSelectedOrder(order);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(orders.map(order => (order.orderId === orderId ? { ...order, status: newStatus } : order)));
    };

    const deleteOrder = (orderId) => {
        setOrders(orders.filter(order => order.orderId !== orderId));
    };

    const navigateToHome = () => {
        navigateTo('/');
        console.log("Navigating to Home");
    };

    const navigateToProduct = () => {
        navigateTo('/product');
        console.log("Navigating to Product");
    };

    return (
        <div className="orders-page">
            <div className="nav">
                <h2>Orders</h2>
                <button onClick={navigateToHome}>Go to Home</button>
                <button onClick={navigateToProduct}>Go to Product</button>
            </div>
            <ul className="orders-list">
                {orders.map(order => (
                    <li key={order.id} className="order-item">
                        <div>Order ID: {order.orderId}</div>
                        <div>Customer Name: {order.customerName}</div>
                        <div>Order Date: {order.orderDate}</div>
                        <div>Status: {order.status}</div>
                        <div className="buttonss">
                            <div className="r"></div>
                            <button onClick={() => viewOrderDetails(order.orderId)}>View Details</button>
                            <button onClick={() => updateOrderStatus(order.orderId, 'Shipped')}>Update Status To Shipped</button>
                            <button onClick={() => deleteOrder(order.orderId)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedOrder && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedOrder(null)}><FontAwesomeIcon icon={faClose} /></span>
                        <h3>Order Details</h3>
                        <div>Order ID: {selectedOrder.orderId}</div>
                        <div>Customer Name: {selectedOrder.customerName}</div>
                        <div>Order Date: {selectedOrder.orderDate}</div>
                        <div>Status: {selectedOrder.status}</div>
                    </div>
                </div>
            )}
        <MyCalendar/>
        </div>
        
    );
};

export default Orders; 
