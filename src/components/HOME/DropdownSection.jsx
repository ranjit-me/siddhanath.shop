import { useState } from "react";
import { Link } from "react-router-dom";

// Dropdown Section
const DropdownSection = ({ title, items }) => (
  <div className="bg-white">
    <h4
      className={`text-gray-700 font-semibold text-xs uppercase mb-2 tracking-wider
        ${
          [
            // Highlighted section titles for each menu
            'SEEDS',
            'CROP PROTECTION',
            'FERTILIZER',
            'VEGETABLE SEEDS',
            'FIELD CROPS',
            'HERBICIDES',
            'INSECTICIDES',
            'FUNGICIDES',
            'BIOFERTILIZERS',
            'MICRONUTRIENTS',
            'GROWTH PROMOTERS',
            'BIO PESTICIDES',
            'ORGANIC MANURES'
          ].includes(title)
            ? 'bg-blue-100 text-blue-700 rounded px-2 py-1'
            : ''
        }`}
    >
      {title}
    </h4>
    <ul className="space-y-1">
      {items.map((item, index) => {
        // Custom routes for BRANDS > SEEDS and related
        let customHref = null;
        switch (item) {
          case "ADVANTA": customHref = "/dropdown/advanta"; break;
          case "BIOSEED": customHref = "/bio-seed"; break;
          case "CRYSTEL SEED": customHref = "/crystel"; break;
          case "GANAGA KAVERI": customHref = "/gk"; break;
          case "GODREJ SEED": customHref = "/godrej-seed"; break;
          case "JK SEED": customHref = "/jk"; break;
          case "KAVERI SEED": customHref = "/kaveri-seed"; break;
          case "MHYCO": customHref = "/mahyco"; break;
          case "JAI KISAN": customHref = "/jai-kisan"; break;
          case "BAYER": customHref = "/bayer"; break;
          case "SYNGENTA": customHref = "/syngenta"; break;
          case "BASF": customHref = "/basf"; break;
          case "DOW": customHref = "/dow"; break;
          case "NISARGA": customHref = "/nisarga"; break;
          case "GODREJ PES": customHref = "/godrej-pesicide"; break;
          case "ORBIT": customHref = "/orbit"; break;
          case "PIONEER": customHref = "/pioneer"; break;
          default: break;
        }
        return (
          <li key={index}>
            <Link
              to={customHref || ("/" + encodeURIComponent(item.replace(/\s+/g, '-').toLowerCase()))}
              className="block text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out px-1 py-0.5 rounded"
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

// Categories Object
const categories = {
  // BRANDS: {
  //   SEEDS: [
  //     "ADVANTA", "BIOSEED", "CRYSTEL SEED", "GANAGA KAVERI", "GODREJ SEED",
  //     "JK SEED", "KAVERI SEED", "MHYCO", "PIONEER"
  //   ],
  //   "CROP PROTECTION": [
  //     "BAYER", "SYNGENTA", "BASF", "DOW", "NISARGA", "GODREJ PES", "ORBIT",
      
  //   ],
  //   "FERTILIZER": [
  //     "JAI KISAN"
  //   ],
  // },
  // SEEDS: {
  //   "VEGETABLE SEEDS": ["ADVANTA", "MHYCO"],
  //   "FIELD CROPS": ["ADVANTA", "BIOSEED", "PIONEER", "MHYCO","KAVERI SEED",
  //     "GANAGA KAVERI","GODREJ SEED","JK SEED"],
  // },
  // "CROP PROTECTION": {
  //   HERBICIDES: ["BASF", "BAYER", "GODREJ PES"],
  //   INSECTICIDES: ["Bayer Crop Science", "Syngenta", "BASF"],
 
  // },
  // "CROP NUTRITION": {
  //   BIOFERTILIZERS: ["Rhizobium", "Azotobacter", "Phosphate Solubilizers"],
  //   MICRONUTRIENTS: ["Zinc", "Iron", "Boron"],
  //   "GROWTH PROMOTERS": ["Seaweed Extract", "Amino Acids", "Humic Acid"]
  // },
  // ORGANIC: {
  //   "BIO PESTICIDES": ["Neem Oil", "Trichoderma", "Beauveria"],
  //   "ORGANIC MANURES": ["Vermicompost", "Cow Dung", "Bone Meal"]
  // }
};

// Hoverable Dropdown Menu
const HoverableMenu = ({ label, sections }) => (
  <div className="relative group">
    <button
      className={`text-sm font-medium px-4 py-2 border-b-2 transition duration-150 ease-in-out text-gray-800 border-transparent group-hover:text-blue-600 group-hover:border-blue-500`}
    >
      {label}
    </button>

    {sections && (
      <div className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-gray-100 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {Object.entries(sections).map(([section, items], idx) => (
          <DropdownSection key={idx} title={section} items={items} />
        ))}
      </div>
    )}
  </div>
);

// Main Navbar
export default function Navbar() {
  const menus = [
    // "BRANDS",
    // "SEEDS",
    // "CROP PROTECTION",
    // "CROP NUTRITION",
    // "ORGANIC"
  ];

  // Custom manual links for all special brands/items
  const manualLinks = [
    { label: "ADVANTA SEEDS", path: "/dropdown/advanta" },
    // { label: "JK SEED", path: "/jk" },
    { label: "GANAGA KAVERI", path: "/gk" },
    { label: "JAI KISAN", path: "/jai-kisan" },
    { label: "BIOSEED", path: "/bio-seed" },
    { label: "CRYSTEL SEED", path: "/crystel" },
    { label: "GODREJ SEED", path: "/godrej-seed" },
    { label: "KAVERI SEED", path: "/kaveri-seed" },
    { label: "MAHYCO", path: "/mahyco" },
    { label: "PIONEER", path: "/pioneer" },
    { label: "BAYER", path: "/bayer" },
    { label: "SYNGENTA", path: "/syngenta" },
    { label: "BASF", path: "/basf" },
    // { label: "DOW", path: "/dow" },
    { label: "NISARGA", path: "/nisarga" },
    // { label: "GODREJ PES", path: "/godrejpes" },
    // { label: "ORBIT", path: "/orbit" }
  ];

  return (
    <div className="relative w-full bg-green-50 border-b border-green-200">
      <div
        className="flex flex-nowrap items-center justify-start w-full overflow-x-auto scrollbar-hide"
        style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
      >
        {menus.map((menu, index) => (
          <HoverableMenu key={menu} label={menu} sections={categories[menu]} />
        ))}
        {manualLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="text-sm font-medium px-4 py-2 border-b-2 transition duration-150 ease-in-out text-gray-800 border-transparent hover:text-blue-600 hover:border-blue-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
