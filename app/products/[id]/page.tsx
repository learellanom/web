"use client";
import React from 'react'
import {useParams} from 'next/navigation';

const page = () => {

    const [myData, setMyData] = React.useState(null);
    const [myId, setMyId] = React.useState(null);
    const [myName, setMyName] = React.useState(null);
    const [myPrice, setMyPrice] = React.useState(null);
    const [myIsAvailable, setMyIsAvailable] = React.useState(null);
    const [myCategory, setMyCategory] = React.useState(null);
    const [myImage, setMyImage] = React.useState(null);
    const getProduct = (id: String) => {
    // console.log('aqui' + id);
        return id;
        
    };




    const params = useParams();

    console.log(String(params.id));

    // const data =  getProduct(String(params.id));
    React.useEffect(()=> {
        async function fetchProduct(id: String){
            const rest = await fetch("http://localhost:3000/api/products/" + id);
            const data = await rest.json();
    
            setMyId(data.id);
            setMyName(data.name);
            setMyPrice(data.price);
            setMyCategory(data.category);
            setMyImage(data.image);
            return data;
        }
        fetchProduct(String(params.id));
    
    },[]);

    return (
    <div>
        <h1 className='text-center'>Product Detail</h1>
        <div className='row
            
            offset
            md-3
            justify-content-center
        '>

            <div className='card text-center align-items-center'>
                <img src={'http://localhost:3000/api' + myImage} alt='imagen'
                    width='300px'
                    height='300px'
                ></img>
                <p style={{fontSize: "20px"}}>{myName}</p>
                <p style={{fontSize: "18px"}}>Precio: {myPrice}</p>
                <button className='mb-5'>Agregar a Favoritos</button>
            </div>
        </div>
    </div>
  )
}

export default page
