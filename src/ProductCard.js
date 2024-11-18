import React, { useState } from "react";

function ProductCard({ product, toggleFavorite, toggleExpand, updateRating }) {
  const { id, name, price, image, description, features, isFavorited, isExpanded, rating } = product;

  // Use the initial rating as the default state
  const [currentRating, setCurrentRating] = useState(rating || 0);

  const handleStarClick = (index) => {
    if (currentRating !== index + 1) { // Prevent unnecessary updates if the same star is clicked
      setCurrentRating(index + 1); // Set the rating based on the clicked star
      updateRating(id, index + 1); // Pass the new rating to the parent component
    }
  };

  return (
    <div className={`product-card ${isFavorited ? "favorited" : ""}`}>
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>

      <div className="rating" aria-label="Product Rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < currentRating ? "filled" : "empty"}`}
            onClick={() => handleStarClick(index)} 
            role="button"
            aria-label={`Rate ${index + 1} stars`}
          >
            ★
          </span>
        ))}
      </div>

      <button
        className={`favorite-btn ${isFavorited ? "favorited" : ""}`}
        onClick={() => toggleFavorite(id)}
        aria-label={isFavorited ? "Unfavorite product" : "Favorite product"}
      >
        {isFavorited ? "❤️ Unfavorite" : "♡ Favorite"}
      </button>

      <button
        className="feature-btn"
        onClick={() => toggleExpand(id)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Hide Features" : "Show Features"}
      >
        {isExpanded ? "Hide Features" : "Show Features"}
      </button>

      {isExpanded && (
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductCard;
