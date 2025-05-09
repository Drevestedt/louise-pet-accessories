import React from "react";
import { useParams } from 'react-router-dom';
import products from "../data/products";
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="p-6">
      <h2 className="text-3xl text-yellow-300 text-center font-bold mb-5 capitalize">{category}</h2>
      <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;