import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AcrobatComplete from "../assets/pesticide/acrobat_complete.png";
import Deleget from "../assets/pesticide/Screenshot 2025-07-08 115838.png";
import Curzate from "../assets/pesticide/Screenshot 2025-07-08 115908.png";
import Tynzer from "../assets/pesticide/tynzer_packshot_-_21_march-left_facing_-_merged.png";
import Vesnit from "../assets/pesticide/vesnit_complete_1l_latest_packshot.png";

const offersData = [
  { id: 1, image: AcrobatComplete, name: "Acrobat Complete", soldOut: false },
  { id: 2, image: Deleget, name: "Deleget", soldOut: false },
  { id: 3, image: Curzate, name: "Curzate", soldOut: false },
  { id: 4, image: Tynzer, name: "Tynzer", soldOut: false },
  { id: 5, image: Vesnit, name: "Vesnit Complete", soldOut: false },
];

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Pesticide = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div className="bg-green-50 border-t border-b border-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Pesticide Product</h2>
          <Link to="/pes" className="text-green-700 font-medium hover:underline">
            View All
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-2">
          {offersData.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[220px] max-w-xs bg-white border rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center p-4"
              style={{ flex: '0 0 auto' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-28 object-contain mb-4"
              />
              <h3 className="text-base font-semibold mb-1 text-center">{item.name}</h3>
              <div className="flex gap-2 w-full mt-2">
                <a
                  href={`https://wa.me/918530457607?text=${encodeURIComponent(`Hello, this is a message from Siddhanath.shop. I am interested in purchasing *${item.name}*.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-white text-center py-2 px-4 rounded-xl transition text-xs font-semibold ${item.soldOut ? 'bg-gray-400 cursor-not-allowed pointer-events-none' : 'bg-green-500 hover:bg-green-600'}`}
                  aria-disabled={item.soldOut}
                >
                  {item.soldOut ? 'Out of Stock' : 'Buy Now on WhatsApp'}
                </a>
                <button
                  type="button"
                  className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition ${isInCart(item.id) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-green-700'}`}
                  title={isInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}
                  onClick={() => addToCart(item)}
                  disabled={item.soldOut}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pesticide;
