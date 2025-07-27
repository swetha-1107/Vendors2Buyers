import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">Street Supply Hub</h1>
      <div>
        <Link to="/vendor" className="mr-4">Vendor</Link>
        <Link to="/supplier">Supplier</Link>
      </div>
    </div>
  );
}