import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import productsData from './data/products.json';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;