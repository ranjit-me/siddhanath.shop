import React from 'react';

import Img1 from '../assets/bestselling.webp';
import Img2 from '../assets/bestselling2.webp';
import Img3 from '../assets/bestselling3.webp';
import Img4 from '../assets/bestselling4.webp';
import Img5 from '../assets/bestselling5.webp';

const products = [
  {
    title: "Bio Insecticide Neem Bliss",
    brand: "Organic India",
    price: 240,
    originalPrice: 300,
    image: Img1,
    size: "500 ml",
  },
  {
    title: "PowerGro Plant Booster",
    brand: "PowerGro",
    price: 180,
    originalPrice: 250,
    image: Img2,
    size: "1 ltr",
  },
  {
    title: "GreenMax Organic Compost",
    brand: "GreenMax",
    price: 95,
    originalPrice: 120,
    image: Img3,
    size: "5 kg",
  },
  {
    title: "Bloom Flowering Stimulant",
    brand: "AgroLife",
    price: 150,
    originalPrice: 200,
    image: Img4,
    size: "250 ml",
  },
  {
    title: "SuperGrow Liquid Fertilizer",
    brand: "GrowMore",
    price: 299,
    originalPrice: 375,
    image: Img5,
    size: "1 ltr",
  },
];

const Bestselling = () => {
  return (
    <div className="bg-pink-50 border-t border-b border-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Bestselling Products</h2>
          <a href="#" className="text-green-700 font-medium hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-28 object-contain mx-auto my-4"
              />
              <h3 className="text-sm font-medium leading-tight">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1">{product.brand}</p>

              <div className="flex items-center gap-2 text-sm font-semibold">
                ₹{product.price}
                <span className="text-gray-400 line-through font-normal text-sm">
                  ₹{product.originalPrice}
                </span>
              </div>

              <p className="text-xs text-green-600 font-medium mt-1">
                ✅ Save ₹{product.originalPrice - product.price}
              </p>

              <div className="mt-2">
                <label className="text-xs font-medium mr-2">Size</label>
                <select className="border border-gray-300 text-sm rounded px-2 py-1">
                  <option>{product.size}</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestselling;
