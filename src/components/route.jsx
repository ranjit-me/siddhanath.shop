import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'
// import NotFound from './HOME/NotFound.jsx';
import HomeRoute from './HOME/Home.jsx';
import AdvantaProducts from './PRODUCTS/BRANDS/ADVANTA/AdvantaProducts.jsx'
import BASFProducts from './PRODUCTS/BRANDS/BASF/BASFProducts.jsx';
import BayerProducts from './PRODUCTS/BRANDS/Bayer/BayerProducts.jsx';
import BioSeedProducts from './PRODUCTS/BRANDS/BioSeed/BioSeedProducts.jsx';
import CrystelProducts from './PRODUCTS/BRANDS/CRYSTEL SEED/CrystelProducts.jsx';
import DowProducts from './PRODUCTS/BRANDS/DOW/DowProducts.jsx';
import GKProducts from './PRODUCTS/BRANDS/GANGAKAVERI/GKProducts.jsx';
import GodrejPesticideProducts from './PRODUCTS/BRANDS/GodrejPes/GodrejPesticideProducts.jsx';
import GodrejSeedProducts from './PRODUCTS/BRANDS/GodrejSeed/GodrejSeedProducts.jsx';
import JaiKisanProducts from './PRODUCTS/BRANDS/JaiKisan/JaiKisanProducts.jsx';
import JKProducts from './PRODUCTS/BRANDS/JK SEED/JKProducts.jsx';
import KaveriSeedProductts from './PRODUCTS/BRANDS/KAVRI SEED/KaveriSeedProducts.jsx';
import MahycoProducts from './PRODUCTS/BRANDS/MAHYCO/MahycoProducts.jsx';
import NisargaProducts from './PRODUCTS/BRANDS/Nisarga/NisargaProducts.jsx';
import OrbitProducts from './PRODUCTS/BRANDS/Orbit/OrbitProducts.jsx';
import PioneerProducts from './PRODUCTS/BRANDS/Pioneer/PioneerProducts.jsx';
import SyngentaProducts from './PRODUCTS/BRANDS/SYNGENTA/SyngentaProducts.jsx';
import Brands from './PRODUCTS/BRANDS/brands.jsx';
import Products from './PRODUCTS/Product.jsx';
import About from './HOME/about.jsx';
import Contact from './HOME/contact.jsx';
import Cart from './HOME/Cart.jsx';
import Seeds from './PRODUCTS/Seeds.jsx';
import Pesticide from './PRODUCTS/Pesticide.jsx';
import BASFHome from './HOME/BASF.jsx';
import AdvantaHome from './HOME/Advanta.jsx';
import PioneerHome from './HOME/Pioneer.jsx';
import Herbicides from './PRODUCTS/Categories/herbicides.jsx';
import GrowthPromoters from './PRODUCTS/Categories/growth-promoters.jsx';
import Fungicides from './PRODUCTS/Categories/fungicides.jsx';
import Vegfru from './PRODUCTS/Categories/vegfru.jsx';
import Nutrients from './PRODUCTS/Categories/nutrients.jsx';
import FlowerSeeds from './PRODUCTS/Categories/flowerseeds.jsx';
import Insecticides from './PRODUCTS/Categories/insecticides.jsx';
import OrganicFarming from './PRODUCTS/Categories/organicfarming.jsx';
//dropdown 
import AdvantaProductsDrop from './dropdown/AdvantaProducts.jsx';
// import BASFProductsDrop from './dropdown/BASFProducts.jsx';
// import BayerProductsDrop from './dropdown/BayerProducts.jsx';
// import BioSeedProductsDrop from './dropdown/BioSeedProducts.jsx';
// import CrystelProductsDrop from './dropdown/CrystelProducts.jsx';
// import GKProductsDrop from './dropdown/GKProducts.jsx';
// import GodrejPesticideProductsDrop from './dropdown/GodrejPesticideProducts.jsx';
// import GodrejSeedProductsDrop from './dropdown/GodrejSeedProducts.jsx';
// import JaiKisanProductsDrop from './dropdown/JaiKisanProducts.jsx';
// import JKProductsDrop from './dropdown/JKProducts.jsx';
// import KaveriSeedProductsDrop from './dropdown/KaveriSeedProducts.jsx';
// import MahycoProductsDrop from './dropdown/MahycoProducts.jsx';
// import PioneerProductsDrop from './dropdown/PioneerProducts.jsx';
// import SyngentaProductsDrop from './dropdown/SyngentaProducts.jsx';

function route() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/advanta" element={<AdvantaProducts />} />
          {/* Only use the correct route for dropdown/advanta */}
          <Route path="/dropdown/advanta" element={<AdvantaProductsDrop />} />
          <Route path="/basf" element={<BASFProducts />} />
          <Route path="/bayer" element={<BayerProducts />} />
          <Route path="/bio-seed" element={<BioSeedProducts />} />
          <Route path="/crystel" element={<CrystelProducts />} />
          <Route path="/dow" element={<DowProducts />} />
          <Route path="/gk" element={<GKProducts />} />
          <Route path="/godrej-pesticide" element={<GodrejPesticideProducts />} />
          <Route path="/godrej-seed" element={<GodrejSeedProducts />} />
          <Route path="/jai-kisan" element={<JaiKisanProducts />} />
          <Route path="/jk" element={<JKProducts />} />
          <Route path="/kaveri-seed" element={<KaveriSeedProductts />} />
          <Route path="/mahyco" element={<MahycoProducts />} />
          <Route path="/nisarga" element={<NisargaProducts />} />
          <Route path="/orbit" element={<OrbitProducts />} />
          <Route path="/pioneer" element={<PioneerProducts />} />
          <Route path="/syngenta" element={<SyngentaProducts />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/pes" element={<Pesticide />} />
          <Route path="/basf" element={<BASFHome />} />
          <Route path="/advanta" element={<AdvantaHome />} />
          <Route path="/pioneer" element={<PioneerHome />} />
          <Route path="/herbicides" element={<Herbicides />} />
          <Route path="/growth-promoters" element={<GrowthPromoters />} />
          <Route path="/fungicides" element={<Fungicides />} />
          <Route path="/vegfru" element={<Vegfru />} />
          <Route path="/nutrients" element={<Nutrients />} />
          <Route path="/flower-seeds" element={<FlowerSeeds />} />
          <Route path="/insecticides" element={<Insecticides />} />
          <Route path="/organic-farming" element={<OrganicFarming />} />
          //dropdown routes
          <Route path="/dropdown/advanta" element={<AdvantaProductsDrop />} />
          {/* <Route path="/dropdown/basf" element={<BASFProductsDrop />} />
          <Route path="/dropdown/bayer" element={<BayerProductsDrop />} />
          <Route path="/dropdown/bio-seed" element={<BioSeedProductsDrop />} />
          <Route path="/dropdown/crystel" element={<CrystelProductsDrop />} />
          <Route path="/dropdown/gk" element={<GKProductsDrop />} />
          <Route path="/dropdown/godrej-pesticide" element={<GodrejPesticideProductsDrop />} />
          <Route path='/dropdown/godrej-seed' element={<GodrejSeedProductsDrop />} />
          <Route path="/dropdown/jai-kisan" element={<JaiKisanProductsDrop />} />
          <Route path='/dropdown/kaveri-seed' element={<KaveriSeedProductsDrop />} />
          <Route path='/dropdown/jk' element={<JKProductsDrop />} />
          <Route path="/dropdown/mahyco" element={<MahycoProductsDrop />} />
          <Route path="/dropdown/pioneer" element={<PioneerProductsDrop />} />
          <Route path="/dropdown/syngenta" element={<SyngentaProductsDrop />} /> */}
          </Routes>
    </>
  )
}

export default route;