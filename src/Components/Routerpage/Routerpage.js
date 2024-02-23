import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import About from '../Pages/About/About'
import Tour from '../Pages/Tour/Tour'
import Blog from '../Pages/Blog/Blog'
import Contact from '../Pages/Contact/Contact'


const Routerpage = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/tour' element={<Tour/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>


              
             
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default Routerpage