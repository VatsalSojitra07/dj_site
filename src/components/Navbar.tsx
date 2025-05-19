
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">Jay Khodiyar</span>
            <span className="text-secondary font-bold text-2xl pl-2">Dj</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="block py-2 text-foreground hover:text-primary">Home</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Speakers</a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* <button className="btn btn-outline flex items-center gap-2">
            <ShoppingCart size={18} />
            <span>Cart (0)</span>
          </button> */}
<<<<<<< HEAD
          {/* <button className="btn btn-primary">Book Date</button> */}
          <button type='button'
            onClick={() =>
              window.open(
                "https://wa.me/917485950447?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
                "_blank"
              )
            }
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            હમણાં બુક કરો
          </button>
=======
          <button className="btn btn-primary">Book Date</button>
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 space-y-4">
            <a href="#" className="block py-2 text-foreground hover:text-primary">Home</a>
            <a href="#products" className="block py-2 text-foreground hover:text-primary">Speakers</a>
            <a href="#features" className="block py-2 text-foreground hover:text-primary">Features</a>
            <a href="#testimonials" className="block py-2 text-foreground hover:text-primary">Reviews</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary">Support</a>
            <div className="pt-4 flex flex-col space-y-3">
              {/* <button className="btn btn-outline flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </button> */}
<<<<<<< HEAD
              {/* <button className="btn btn-primary">Book Date</button> */}
              <button type='button'
                onClick={() =>
                  window.open(
                    "https://wa.me/917485950447?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
                    "_blank"
                  )
                }
                className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
              >
                હમણાં બુક કરો
              </button>
=======
              <button className="btn btn-primary">Book Date</button>
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
