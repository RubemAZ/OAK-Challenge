'use client';

import React, { useState } from 'react';
import ModalForm from './components/ModalForm';
import Table from './components/Table';

const IndexPage = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct: any) => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: prevProducts.length + 1 }]);
  };
  

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Produtos</h1>
        <div className="mb-4">
          <ModalForm onSubmit={handleAddProduct} />
        </div>
        <Table products={products} />
      </div>
  );
};

export default IndexPage;
