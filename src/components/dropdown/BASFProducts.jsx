
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import acrisio_100mi from '../PRODUCTS/BRANDS/BASF/assets/acrisio-100mi.jpg';
import acrobat_1 from '../PRODUCTS/BRANDS/BASF/assets/acrobat_1.png';
import acrobat_complete from '../PRODUCTS/BRANDS/BASF/assets/acrobat_complete.png';
import basagran_0 from '../PRODUCTS/BRANDS/BASF/assets/basagran_0.jpg';
import basta_1l_bottle from '../PRODUCTS/BRANDS/BASF/assets/basta_1l_bottle-.jpg';
import cabrio_top from '../PRODUCTS/BRANDS/BASF/assets/cabrio_top.png';
import efficon_packshot_0 from '../PRODUCTS/BRANDS/BASF/assets/efficon_packshot_0.png';
import exponus_broflanilide_insecticide_basf from '../PRODUCTS/BRANDS/BASF/assets/exponus_broflanilide_insecticide_basf.png';
import facet_400ml_bottel_4 from '../PRODUCTS/BRANDS/BASF/assets/facet_400ml_bottel-4.png';
import fin_duvelon_packshot from '../PRODUCTS/BRANDS/BASF/assets/fin_duvelon_packshot.png';
import imunit_240ml from '../PRODUCTS/BRANDS/BASF/assets/imunit_240ml.png';
import intrepid_new_packshot from '../PRODUCTS/BRANDS/BASF/assets/intrepid_new_packshot.png';
import librel_tmx_2_1kg_pouch from '../PRODUCTS/BRANDS/BASF/assets/librel_tmx_2_-_1kg_pouch.png';
import librel_zn from '../PRODUCTS/BRANDS/BASF/assets/librel_zn.png';
import lihocin_1_l_bottel from '../PRODUCTS/BRANDS/BASF/assets/lihocin_1_l_bottel.jpg';
import merivon_0 from '../PRODUCTS/BRANDS/BASF/assets/merivon_0.png';
import mibelya_1024_x_768px from '../PRODUCTS/BRANDS/BASF/assets/mibelya_1024_x_768px.jpg';
import odyssey from '../PRODUCTS/BRANDS/BASF/assets/odyssey.jpg';
import pirate_170ml_packshot from '../PRODUCTS/BRANDS/BASF/assets/pirate_170ml_packshot.png';
import polyram_0 from '../PRODUCTS/BRANDS/BASF/assets/polyram_0.png';
import Pursuit from '../PRODUCTS/BRANDS/BASF/assets/Pursuit.jpg';
import tynzer_packshot_21_march_left_facing_merged from '../PRODUCTS/BRANDS/BASF/assets/tynzer_packshot_-_21_march-left_facing_-_merged.png';
import vesnit_complete_1l_latest_packshot from '../PRODUCTS/BRANDS/BASF/assets/vesnit_complete_1l_latest_packshot.png';

const basfProducts = [
  { id: 1, image: acrisio_100mi, name: 'Acrisio 100mi',  soldOut: false },
  { id: 2, image: acrobat_1, name: 'Acrobat 1',  soldOut: false },
  { id: 3, image: acrobat_complete, name: 'Acrobat Complete',  soldOut: false },
  { id: 4, image: basagran_0, name: 'Basagran',  soldOut: false },
  { id: 5, image: basta_1l_bottle, name: 'Basta 1L',  soldOut: false },
  { id: 6, image: cabrio_top, name: 'Cabrio Top',  soldOut: false },
  { id: 7, image: efficon_packshot_0, name: 'Efficon',  soldOut: false },
  { id: 8, image: exponus_broflanilide_insecticide_basf, name: 'Exponus',  soldOut: false },
  { id: 9, image: facet_400ml_bottel_4, name: 'Facet',  soldOut: false },
  { id: 10, image: fin_duvelon_packshot, name: 'Fin Duvelon',  soldOut: false },
  { id: 11, image: imunit_240ml, name: 'Imunit',  soldOut: false },
  { id: 12, image: intrepid_new_packshot, name: 'Intrepid',  soldOut: false },
  { id: 13, image: librel_tmx_2_1kg_pouch, name: 'Librel TMX',  soldOut: false },
  { id: 14, image: librel_zn, name: 'Librel ZN',  soldOut: false },
  { id: 15, image: lihocin_1_l_bottel, name: 'Lihocin',  soldOut: false },
  { id: 16, image: merivon_0, name: 'Merivon',  soldOut: false },
  { id: 17, image: mibelya_1024_x_768px, name: 'Mibelya',  soldOut: false },
  { id: 18, image: odyssey, name: 'Odyssey',  soldOut: false },
  { id: 19, image: pirate_170ml_packshot, name: 'Pirate',  soldOut: false },
  { id: 20, image: polyram_0, name: 'Polyram',  soldOut: false },
  { id: 21, image: Pursuit, name: 'Pursuit',  soldOut: false },
  { id: 22, image: tynzer_packshot_21_march_left_facing_merged, name: 'Tynzer',  soldOut: false },
  { id: 23, image: vesnit_complete_1l_latest_packshot, name: 'Vesnit Complete',  soldOut: false },
];

function AllProducts() {
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {basfProducts.map((product) => (
        <div
          key={product.id}
          className="relative border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          {/* Sold Out Badge */}
          {product.soldOut && (
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              SOLD OUT
            </span>
          )}

          {/* Product Image */}
          <Link to={product.link} className="flex justify-center items-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className={`h-40 object-contain ${product.soldOut ? 'opacity-50' : ''}`}
            />
          </Link>

          {/* Wishlist Icon */}
          <FaRegHeart className="absolute top-10 right-2 text-gray-500 hover:text-red-500 cursor-pointer text-xl" />

          {/* Product Info */}
          <h3 className="text-base font-semibold mb-1 flex items-center gap-0 justify-center text-center">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">BASF</p>

          <div className="flex gap-2 w-full mt-2">
            <a
              href={
                product.soldOut
                  ? '#'
                  : `https://wa.me/918530457607?text=${encodeURIComponent(
                      `Hello, this is a message from Siddhanath.shop. I am interested in purchasing *${product.name}*.`
                    )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => product.soldOut && e.preventDefault()}
              className={`flex-1 text-white text-center py-2 rounded-xl transition ${
                product.soldOut
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {product.soldOut ? 'Out of Stock' : 'Buy Now on WhatsApp'}
            </a>
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition ${isInCart(product.id) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-green-700'}`}
              title={isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              onClick={() => {
                if (!isInCart(product.id)) addToCart(product);
              }}
              disabled={product.soldOut}
            >
              <FontAwesomeIcon icon={faCartShopping} className={isInCart(product.id) ? 'text-white' : 'text-green-700'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
