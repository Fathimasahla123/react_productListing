import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;