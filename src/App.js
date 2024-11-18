import React, { useState, useCallback } from "react";
import ProductList from "./ProductList";
 // Import the Footer component
 import Header from './Header'; // Import the Header component
 import Footer from './Footer'; 


import './styles.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone ",
      price: "$299",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s",
     // image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg",
      description: "A high-end smartphone            with extreme amazing and              powerful features.",
      features: ["6.5-inch OLED display", "128GB storage", "48MP camera"],
      isFavorited: false,
      isExpanded: false,
      rating: 4, // Initial rating
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$79",
      image: "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?s=612x612&w=0&k=20&c=Xs150nT8O2jHQJ3tSA221BKFy--xHwfLd_kVYVGUgTY=",
      description: "Noise-cancelling wireless headphones for an immersive experience.",
      features: ["Active noise cancellation", "20-hour battery life", "Comfortable ear cups"],
      isFavorited: false,
      isExpanded: false,
      rating: 5,
    },
    // {
    //   id: 3,
    //   name: "Gaming Laptop Pro",
    //   price: "$1299",
    //   image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAeNxXuQ4ZWjk589c-tr800_rhdOeUB19Zg&s",
    //  // image: "https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg",
    //   description: "A powerful laptop for high-end gaming and multitasking.",
    //   features: ["Intel Core i9 processor", "16GB RAM", "RTX 3070 GPU"],
    //   isFavorited: false,
    //   isExpanded: false,
    //   rating: 5,
    // },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$49",
      image: "https://m.media-amazon.com/images/I/614pmXRPMFL._AC_UF1000,1000_QL80_.jpg " ,
    //  image :"https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=",
      description: "Portable Bluetooth speaker with rich sound quality.",
      features: ["IPX7 waterproof", "10-hour battery", "360° sound"],
      isFavorited: false,
      isExpanded: false,
      rating: 4,
    },
    {
      id: 5,
      name: "Smartwatch Series 5",
      price: "$199",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmx-c5gP3VNrohFWOtlhT4C5x6b2WP5aubg&s",
      description: "A sleek smartwatch.Monitor your health with updates and advanced features.",
      features: ["Heart rate monitor", "GPS tracking", "Swim-proof design"],
      isFavorited: false,
      isExpanded: false,
      rating: 4,
    },
    // Add more products if needed
  ]);

  const [showFavorites, setShowFavorites] = useState(false);

  // Toggle favorite functionality
  const toggleFavorite = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  }, []);

  // Toggle expand functionality for showing/hiding features
  const toggleExpand = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isExpanded: !product.isExpanded }
          : product
      )
    );
  }, []);

  // Update rating for a product
  const updateRating = useCallback((id, rating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, rating } : product
      )
    );
  }, []);

  // Handle show favorites toggle
  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  // Clear all favorites
  const clearFavorites = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, isFavorited: false }))
    );
  };

  // Filter products to show favorites only
  const filteredProducts = showFavorites
    ? products.filter((product) => product.isFavorited)
    : products;

  return (
    <div className="App">
        <Header /> 
      <h1>Product List</h1>
      <div className="buttons">
        <button onClick={toggleShowFavorites}>
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>
        <button onClick={clearFavorites} disabled={products.every(product => !product.isFavorited)}>
          Clear All Favorites
        </button>
      </div>
      
      <ProductList
        products={filteredProducts}
        toggleFavorite={toggleFavorite}
        toggleExpand={toggleExpand}
        updateRating={updateRating}

      />
      <Footer />
    </div>
  );
}

export default App;
