import React from 'react'
import Itemscard from './Itemscard'
import data  from './data'
import { useCart } from 'react-use-cart'
import Cart from './Cart'
const Home = () => {
    const { isEmpty,totalUniqueItems }= useCart();
  return (
    <>
    
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand ">Food App</a>  
      <button class="btn btn-outline-success d-flex" onClick={ Cart } >Cart({totalUniqueItems})</button>
    
  </div>
</nav>
<h1 className='text-center mt-3'>All Items</h1>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
        {
            data.productData.map((item, index)=>{
          return(
            <Itemscard 
            img={item.img}
            title={item.title} 
            desc={item.desc} 
            price={item.price} 
            item={item} 
            key={index} />
          )
        })}
         
        </div>
    </section>
    </>
  )
}

export default Home