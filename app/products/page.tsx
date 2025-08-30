import ProductsList from '@/components/ProductsList';
import React from 'react';

async function fetchProducts(){
  const rest = await fetch("http://localhost:3000/api/products");
  const data = await rest.json();
  // console.log(data);
  return data;
}

async function fetchImage(nombreImg: string){
  const rest = await fetch("http://localhost:3000/api/img/" + nombreImg);
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
      {/* <ul>
        {
          Products.map((product: any) =>(

            <li key={product.id}
            >
              <div>
              <h5>{product.id} {product.name}</h5>
              <p>{product.price}</p>
              <p>{product.isAvailable}</p>
              <p>{product.category}</p>
              
              <img src={'http://localhost:3000/api' + product.image} alt='imagen'
                width='100px'
                height='100px'
              ></img>
              </div>
            </li>
          ))
        }
      </ul> */}
    </div>
  )
}

export default Products