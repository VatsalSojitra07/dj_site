
import React from 'react';
import { Speaker, Music, Headphones, ShoppingCart } from 'lucide-react';
import audio from "./assets/Audio Speaker.jpg"
import dj from "./assets/dj stage lights.jpg"
import pr from "./assets/Professional Speaker-2 pack with tripod stands.jpg"
import sp from "./assets/Speaker Pair.jpg"

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pro DJ-8000 System",
      description: "Professional DJ system with dual controllers and built-in effects processor",
      // price: 1299.99,
      image: pr,
<<<<<<< HEAD
      category: "Pro DJ-8000 System",
=======
      category: "DJ Systems",
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
      icon: <Music size={20} />
    },
    {
      id: 2,
      name: "UltraBass Speaker Set",
      description: "High-performance speaker set with deep bass response and crystal clear highs",
      // price: 899.99,
      image: sp,
<<<<<<< HEAD
      category: "UltraBass Speaker Set",
=======
      category: "Speakers",
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
      icon: <Speaker size={20} />
    },
    {
      id: 3,
<<<<<<< HEAD
      name: "Main Speakers",
      description: "Professional studio monitoring Main Speakers.",
      // price: 349.99,
      image: audio,
      category: "Main Speakers",
=======
      name: "StudioMix Headphones",
      description: "Professional studio monitoring headphones with noise isolation",
      // price: 349.99,
      image: audio,
      category: "Headphones",
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
      icon: <Headphones size={20} />
    },
    {
      id: 4,
<<<<<<< HEAD
      name: "DJ Light",
      description: "DJ light with Disko color light with music combination.",
      // price: 1599.99,
      image:dj,
      category: "DJ Light",
=======
      name: "Stage Pro PA System",
      description: "Complete PA system for live performances with wireless connectivity",
      // price: 1599.99,
      image:dj,
      category: "PA Systems",
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
      icon: <Speaker size={20} />
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        {/* <h2 className="section-title">Our Speakers</h2> */}
        <h2 className="section-title">અમારી સિસ્ટમ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative overflow-hidden h-48 lg:h-56 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-card px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  {product.icon}
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-lg font-bold text-accent">${product.price}</span> */}
                  {/* <button className="btn btn-primary py-1 px-3 text-sm flex items-center gap-1">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="btn btn-outline">View All Products</button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
