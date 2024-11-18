// import React from "react";
// import ProductCard from "./ProductCard";

// function ProductList({ products, toggleFavorite, toggleExpand, updateRating }) {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           toggleFavorite={toggleFavorite}
//           toggleExpand={toggleExpand}
//           updateRating={updateRating}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductList;



import React from "react";
import ProductCard from "./ProductCard";

// React.memo can be used here for optimization if ProductCard does not need to re-render unnecessarily
const ProductList = React.memo(({ products, toggleFavorite, toggleExpand, updateRating }) => {
  // Check if there are any products
  if (!products || products.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          toggleExpand={toggleExpand}
          updateRating={updateRating}
        />
      ))}
    </div>
  );
});

export default ProductList;
