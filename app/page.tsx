import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div 
    className='mx-auto col-md-4'
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}
    >
      <img
       className='mx-auto col-12  img-fluid'
       src='/Logo-Design-Market.jpg'
       alt='logo'
       width={100}
       height={50}
      >
      </img>
    </div>
  )
}

export default page
