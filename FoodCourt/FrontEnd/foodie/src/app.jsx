import React from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import Footer from './component/footer'
import Login from './component/login'
import Signup from './component/signup'
import Contact from './pages/contact'
import Privatecomp from './component/privatecomp'
import Appt from './component/appt'
import Menu from './component/menu'
import Lunchdinner from './component/lunchdinner'
import Pizza from './component/pizza'
import Salad from './component/salad'
import Dessert from './component/dessert'
import Cart from './pages/cart'
import CheckOut from './component/checkout'
import Services from './pages/services'
import ErrorPage from './pages/error'

import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route element={<Privatecomp/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>        
        <Route path='/appetizer' element={<Appt/>}/>        
        <Route path='/lunch' element={<Lunchdinner/>}/>  
        <Route path='/pizza' element={<Pizza/>}/>  
        <Route path='/salad' element={<Salad/>}/>  
        <Route path='/dessert' element={<Dessert/>}/>  
        <Route path='/cart' element={<Cart/>}/>                
        <Route path='/check' element={<CheckOut/>}/>                
        <Route path='/services' element={<Services/>}/>                
        <Route path='/*' element={<ErrorPage/>}/>                
      </Route>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App