import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function VendorDashboard() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = async () => {
    await addDoc(collection(db, "orders"), { name, quantity });
    setName("");
    setQuantity("");
    fetchItems();
  };

  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, "orders"));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(list);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Vendor Dashboard</h2>
      <div className="flex space-x-2 my-4">
        <input placeholder="Item name" value={name} onChange={e => setName(e.target.value)} className="border p-2" />
        <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className="border p-2" />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2">Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-b py-2">{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
