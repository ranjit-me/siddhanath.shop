import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import admire_slide_2 from './assets/admire-slide-2-1024x542.png';
import Aliette_campaign_banner_mob from './assets/Aliette-campaign-banner-mob.jpg';
import Antracol_banner_2 from './assets/Antracol-banner-2-1024x542.png';
import ethrel_banner_mob from './assets/ethrel-banner-mob.jpg';
import ethrel_features_pic from './assets/ethrel-features-pic-1024x681.png';
import Folicur_banner_1_mob from './assets/Folicur-banner-1-mob.jpg';
import Laudis_banner from './assets/Laudis-banner-1024x542.png';
import nativo_banner_mob from './assets/nativo-banner-mob.jpg';
import planofix_banner_mob from './assets/planofix-banner-mob.jpg';
import regent_ultra_banner_mob from './assets/regent-ultra-banner-mob.jpg';
import roundup_banner_mob_1 from './assets/roundup-banner-mob-1.jpg';
import roundup_banner_mob from './assets/roundup-banner-mob.jpg';
import solomon_banner_mob from './assets/solomon-banner-mob.jpg';
import vayego_banner_mob from './assets/vayego-banner-mob.jpg';

const bayerProducts = [
  { id: 1, image: admire_slide_2, name: 'Admire', link: '/bayer', soldOut: false },
  { id: 2, image: Aliette_campaign_banner_mob, name: 'Aliette', link: '/bayer', soldOut: false },
  { id: 3, image: Antracol_banner_2, name: 'Antracol', link: '/bayer', soldOut: false },
  { id: 4, image: ethrel_banner_mob, name: 'Ethrel', link: '/bayer', soldOut: false },
  { id: 5, image: ethrel_features_pic, name: 'Ethrel Features', link: '/bayer', soldOut: false },
  { id: 6, image: Folicur_banner_1_mob, name: 'Folicur', link: '/bayer', soldOut: false },
  { id: 7, image: Laudis_banner, name: 'Laudis', link: '/bayer', soldOut: false },
  { id: 8, image: nativo_banner_mob, name: 'Nativo', link: '/bayer', soldOut: false },
  { id: 9, image: planofix_banner_mob, name: 'Planofix', link: '/bayer', soldOut: false },
  { id: 10, image: regent_ultra_banner_mob, name: 'Regent Ultra', link: '/bayer', soldOut: false },
  { id: 11, image: roundup_banner_mob_1, name: 'Roundup 1', link: '/bayer', soldOut: false },
  { id: 12, image: roundup_banner_mob, name: 'Roundup', link: '/bayer', soldOut: false },
  { id: 13, image: solomon_banner_mob, name: 'Solomon', link: '/bayer', soldOut: false },
  { id: 14, image: vayego_banner_mob, name: 'Vayego', link: '/bayer', soldOut: false },
];

function AllProducts() {
  // Cart logic
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
      {bayerProducts.map((product) => (
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
          <p className="text-sm text-gray-500 mb-4">Bayer</p>

          <div className="flex gap-2 w-full mt-2">
            <a
              href={
                product.soldOut
                  ? '#'
                  : `https://wa.me/919172136064?text=${encodeURIComponent(
                      `Hi, I'm interested in ${product.name}`
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
