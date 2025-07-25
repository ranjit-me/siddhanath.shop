import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.jpg'

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <div className="flex items-center gap-3 mb-6 border-b pb-4">
          <FontAwesomeIcon icon={faCartShopping} className="text-green-700 text-2xl" />
          <h1 className="text-2xl font-bold text-green-700 uppercase tracking-wider">Your Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <img src={logo} alt="Empty Cart" className="mx-auto mb-6 w-24 h-24 opacity-60" />
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-4">Looks like you haven't added anything to your cart yet.</p>
            <button
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
              onClick={() => {
                if (cartItems.length === 0) {
                  window.location.href = "/";
                  return;
                }
                const productNames = cartItems.map(item => item.name).join(', ');
                const message = `Hello, this is a message from Siddhanath.shop. I am interested in purchasing ${productNames}. Total products: ${cartItems.length}`;
                const encodedMsg = encodeURIComponent(message);
                window.open(`https://wa.me/918530457607?text=${encodedMsg}`, '_blank');
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded border" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-500">BASF Product</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg text-sm font-medium transition"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
              onClick={() => {
                if (cartItems.length === 0) {
                  window.location.href = "/";
                  return;
                }
                const productNames = cartItems.map(item => item.name).join('\n');
                const message = `Hello, this is a message from Siddhanath.shop. I am interested in purchasing\n${productNames}`;
                const encodedMsg = encodeURIComponent(message);
                window.open(`https://wa.me/918530457607?text=${encodedMsg}`, '_blank');
                setCartItems([]);
                localStorage.removeItem('cart');
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
