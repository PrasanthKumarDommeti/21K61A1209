import React, { useEffect, useState } from 'react';
import { getProducts } from '../Services/api'; 
import ProductList from '../Components/ProductList'; // Ensure path is correct

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
