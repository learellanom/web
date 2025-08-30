"use client";
import {useRouter} from 'next/navigation';

function ProductsList(products: any) {
  
  const Products = products.products;
  const router = useRouter();
  
  return (
    <div className='col-md-6 mx-auto'>
    <ul className='list-group'>
    {
      Products.map((product: any) =>(

        <li key={product.id} 
          // onClick={ () => { router.push(`/products/${product.id}`) }}
          onClick={ () => { router.push(`/products/${product.id}`) }}
          className='list-group-item 
            justify-content-between
          
            d-flex 
            list-group-item-action
            align-items-center
            '
        >
          
          <div>
          <p style={{fontSize: "16px"}}>{product.name}</p>
          <p style={{fontSize: "14px"}}>Precio: {product.price}</p>
          <p>{product.isAvailable}</p>
          <p>Categoria: {product.category}</p> 
          { product.isAvailable ? <span className="badge text-bg-secondary text-bg-success">En stock</span> : <span className="badge text-bg-secondary">Sin stock</span>}
          </div>
          <div className=''>
          <img src={'http://localhost:3000/api' + product.image} alt='imagen'
            width='200px'
            height='200px'
          ></img>
          </div>
        </li>

      ))
    }
  </ul>
  </div>
  )
}

export default ProductsList