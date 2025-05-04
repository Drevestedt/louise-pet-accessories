import React from "react";
import { useParams } from 'react-router-dom';
import products from "../data/products";
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="p-6"> #TODO: Style for cards in rows of 3
      <h2 className="text-2-1 font-bold mb-4 capitalize">{category} Products</h2>
      <div>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;