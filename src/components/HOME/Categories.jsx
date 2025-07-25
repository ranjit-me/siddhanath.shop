import React from "react";
import { Link } from "react-router-dom";

// Image imports
import OffersImg from "../assets/offers.webp";
import HerbicidesImg from "../assets/herbicides.webp";
import GrowthPromotersImg from "../assets/Growth.webp";
import FungicidesImg from "../assets/Fungicides.webp";
import VegfruImg from "../assets/vegfru.webp";
import MachineryImg from "../assets/FarmMachinere.webp";
import NutrientsImg from "../assets/Neutrietns.webp";
import FlowerSeedsImg from "../assets/flowerseeds.webp";
import InsecticidesImg from "../assets/insecticides.webp";
import OrganicImg from "../assets/organic.webp";
import AnimalImg from "../assets/Animal.webp";
import NewarrivalsImg from "../assets/newarrival.webp";

const categories = [
  // { name: "Offers", image: OffersImg, slug: "offers" },
  { name: "Herbicides", image: HerbicidesImg, slug: "herbicides" },
  { name: "Growth Promoters", image: GrowthPromotersImg, slug: "growth-promoters" },
  { name: "Fungicides", image: FungicidesImg, slug: "fungicides" },
  { name: "Vegetable & Fruit Seeds", image: VegfruImg, slug: "vegfru" },
  // { name: "Farm Machinery", image: MachineryImg, slug: "farm-machinery" },
  { name: "Nutrients", image: NutrientsImg, slug: "nutrients" },
  { name: "Flower Seeds", image: FlowerSeedsImg, slug: "flower-seeds" },
  { name: "Insecticides", image: InsecticidesImg, slug: "insecticides" },
  { name: "Organic Farming", image: OrganicImg, slug: "organic-farming" },
  // { name: "Animal Husbandry", image: AnimalImg, slug: "animal" },
  // { name: "New Arrival", image: NewarrivalsImg, slug: "new-arrival" },
];

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl text-black font-semibold text-center mb-10 pb-2 border-b border-gray-300">
        Categories
      </h2>

      {/* Grid only (no scrolling) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
        {categories.map((category, index) => (
          <Link
            to={`/${category.slug}`}
            key={index}
            className="group flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <div className="w-28 h-28 rounded-full bg-gray-100 overflow-hidden shadow-md relative transition duration-300 group-hover:ring-4 group-hover:ring-green-200">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-32 h-28 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-base text-gray-600 font-medium group-hover:text-green-600 transition">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
