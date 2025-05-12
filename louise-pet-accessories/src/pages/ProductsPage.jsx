import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://louise-pet-accessories-6f8f8f04c94f.herokuapp.com/api/products/${category}/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    //<h2 className="text-3xl text-yellow-300 text-center font-bold mb-5 capitalize">{category}</h2>
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
export default ProductPage;