import React from "react";

const ProductCard = ({ product} ) => {
  <div className="border rounded p-4 shadow hover:shadow-lg">
    <img src="{product.image}" alt="{product.name}" className="w-full h-48 object-cover mb-2"/>
    <h3 className="text-lg font-bold">{product.name}</h3>
    <p className="text-gray-700">${product.price.toFixed(2)}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
      Add to cart
    </button>
  </div>
}

export default ProductCard;
