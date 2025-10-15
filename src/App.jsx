import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import Productinfo from './Productinfo'
import About from './Pages/About'
import Service from './Pages/Service'
import Cart from './Pages/Cart'


const App = () => {
  const [cart,setCart]=useState([])
   
  const addToCart = (product)=>{
    const exist = cart.find(item=>item.id===product.id);
    if(exist){
      setCart(cart.map(item=>item.id===product.id?{...item, quantity : item.quantity+1}:item))}
      else {
        setCart([...cart,{...product,quantity:1}])
      }
    }
    console.log(cart)
  
  return (
    <div className='bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
         <Route path="/product/:id" element={<Productinfo addToCart={addToCart}/>}/>
           <Route path="/About" element={<About/>} />
               <Route path="/service" element={<Service/>} />
             
  
      </Routes>
      
    </div>
  )
}

export default App