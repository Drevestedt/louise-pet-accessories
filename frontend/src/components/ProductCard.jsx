import React from "react";

const ProductCard = ( {product} ) => {
  console.log("Image URL:", product.image);
  return (
    <div className="bg-zinc-900 border border-yellow-500 rounded-2x1 p-4 shadow-md hover:shadow-xl transition-shadow">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 text-yellow-300"/>
    <h3 className="text-yellow-300 text-lg font-bold">{product.name}</h3>
    <p className="text-yellow-500 font-semibold mb-2">${parseFloat(product.price).toFixed(2)}</p>
    <button className="w-full bg-yellow-500 text.black px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
      Add to cart
    </button>
  </div>
  );
}

export default ProductCard;
