import React from 'react';
import { Link } from 'react-router-dom';

// Importing logos
import AdvLogo from './assets/AdvLogo.jpg';
import CrystalLogo from './assets/crystal_Logo.png';
import JKaglLogo from './assets/JKAGL-LOGO.webp';
import KaveriLogo from './assets/KaveriLogo.png';
import MahycoLogo from './assets/mahycoGrow.png';
import CortivaLogo from './assets/Pioneer.webp';
import BASFLogo from './assets/BASF_Logo.jpg';
import BayerLogo from './assets/Bayer_Logo.svg';
import BioseedLogo from './assets/Bioseed_Logo.jpg';
import DowLogo from './assets/dow-logo.svg';
import GangaKaveriLogo from './assets/GanagaKaveri.png';
import GodrejPesLogo from './assets/GodrejPes_Logo.png';
import GodrejSeedLogo from './assets/GodrejSeed_Logo.png';
import JaiKisanLogo from './assets/JaiKisan_Logo.png';
import NisargaLogo from './assets/Nisarga.jpg';
import OrbitLogo from './assets/orbitlogo.png';
import SyngentaLogo from './assets/syngenta.png';

const brands = [
  { name: 'Advanta', path: '/advanta', logo: AdvLogo },
  { name: 'Crystal', path: '/crystel', logo: CrystalLogo },
  { name: 'JK Agri Genetics', path: '/jk', logo: JKaglLogo },
  { name: 'Kaveri', path: '/kaveri', logo: KaveriLogo },
  { name: 'Mahyco', path: '/mahyco', logo: MahycoLogo },
  { name: 'Cortiva', path: '/pioneer', logo: CortivaLogo },
  { name: 'BASF', path: '/basf', logo: BASFLogo },
  { name: 'Bayer', path: '/bayer', logo: BayerLogo },
  { name: 'Bioseed', path: '/bioseed', logo: BioseedLogo },
  { name: 'Dow', path: '/dow', logo: DowLogo },
  { name: 'Ganga Kaveri', path: '/gk', logo: GangaKaveriLogo },
  { name: 'Godrej Pes', path: '/godrejpes', logo: GodrejPesLogo },
  { name: 'Godrej Seed', path: '/godrejseed', logo: GodrejSeedLogo },
  { name: 'Jai Kisan', path: '/jaikisan', logo: JaiKisanLogo },
  { name: 'Nisarga', path: '/nisarga', logo: NisargaLogo },
  { name: 'Orbit', path: '/orbit', logo: OrbitLogo },
  { name: 'Syngenta', path: '/syngenta', logo: SyngentaLogo },
];

function Brands() {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10 border-b-4 border-green-500 inline-block pb-3">
        Our Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {brands.map((brand) => (
          <Link
            to={brand.path}
            key={brand.name}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 w-full flex flex-col items-center justify-center h-40 text-center"
            aria-label={`Visit ${brand.name}`}
          >
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className="max-h-20 object-contain mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{brand.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Brands;
