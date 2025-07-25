import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pio3302 from "../assets/seeds/P1_PIO3302.png";
import JK4545 from "../assets/seeds/P2_JKMH4545.png";
import PAC741 from "../assets/seeds/P8_PAC741.png";
import PAC751 from "../assets/seeds/P10_PAC751Elite.png";
import PAC334 from "../assets/seeds/P12_PAC334.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const offersData = [
  { id: 1, image: Pio3302, name: "Pioneer 3302", soldOut: false },
  { id: 2, image: JK4545, name: "JK 4545", soldOut: false },
  { id: 3, image: PAC741, name: "PAC 741", soldOut: false },
  { id: 4, image: PAC751, name: "PAC 751", soldOut: false },
  { id: 5, image: PAC334, name: "PAC 334", soldOut: false },
];

const Seeds = () => {
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
          <h2 className="text-2xl font-semibold">Seeds Product</h2>
          <Link to="/seeds" className="text-green-700 font-medium hover:underline">
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

export default Seeds;
