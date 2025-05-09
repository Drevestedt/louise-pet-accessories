import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-6"> #TODO: Continue with useEffect setup
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