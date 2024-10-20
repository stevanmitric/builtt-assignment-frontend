import React from 'react';
import { getAllProducts } from '../../api/products';
import { ProductCard } from '../../components/ProductCard';
export const Products = () => {
  return (
    <div className='products-container'>
      <div className='products-header'>
        <span className='products-header-title'>Svi proizvodi</span>
        <span className='products-header-quantity'>
          {getAllProducts?.length} proizvoda
        </span>
      </div>
      <div className='product-list'>
        {getAllProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
