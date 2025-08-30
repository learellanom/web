import ProductsList from '@/components/ProductsList';
import React from 'react';

async function fetchProducts(){
  const rest = await fetch("http://localhost:3001/api/products");
  const data = await rest.json();
  // console.log(data);
  return data;
}

async function fetchImage(nombreImg: string){
  const rest = await fetch("http://localhost:3001/api/img/" + nombreImg);
  const data = await rest.json();
   console.log(data);
  //  return data;
}

async function Products() {
  const Products =   await fetchProducts();

  // console.log(products);
  return (
    <div>
      
      <ProductsList products={Products} />

    </div>
  )
}

export default Products