import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <img src={`https://via.placeholder.com/300?text=${product.productName}`} alt={product.productName} />
      <h1>{product.productName}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
