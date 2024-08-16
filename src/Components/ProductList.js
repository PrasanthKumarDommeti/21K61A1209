import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.productName} className="product-card">
          <Link to={`/product/${product.productName}`}>
            <img src={`https://via.placeholder.com/150?text=${product.productName}`} alt={product.productName} />
            <h3>{product.productName}</h3>
          </Link>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
