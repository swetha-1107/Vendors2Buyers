import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function SupplierDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      setOrders(snapshot.docs.map(doc => doc.data()));
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Supplier Dashboard</h2>
      <ul>
        {orders.map((o, index) => (
          <li key={index} className="border-b py-2">{o.name} - {o.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
