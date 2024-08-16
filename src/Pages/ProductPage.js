import React, { useEffect, useState } from 'react';
import { getProducts } from '../Services/api'; // Adjust the path to your API file

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(productData);
      } catch (error) {
        setError('Error fetching products.');
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
