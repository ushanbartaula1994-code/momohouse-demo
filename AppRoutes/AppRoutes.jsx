import{Route,Routes} from "react-router-dom"
import AllergyAdvice from "../pages/AllergyAdvice"
import PageNotFound from "../pages/PageNotFound"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import About from "../pages/About"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import ProductDetail from "../pages/ProductDetail"
import CartPage from "../pages/CartPage"
import Fail from "../paymentSystem/Fail"
import Payment from "../paymentSystem/Payment"
import Success from "../paymentSystem/Success"
import Login from "../pages/Login"
import Profile from "../pages/Profile"


function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/allergyadvice" element={<AllergyAdvice/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/pagenotfound" element={<PageNotFound/>}/>
            <Route path="/productdetail" element={<ProductDetail/>}/>
            <Route path ="/cartPage" element={<CartPage/>}/>
            <Route path ="/fail" element ={<Fail/>}/>
            <Route path ="/payment" element ={<Payment/>}/>
            <Route path ="/success" element ={<Success/>}/>
             <Route path ="/profile" element ={<Profile/>}/>
              <Route path ="/login" element ={<Login/>}/>
        </Routes>
      
    </div>
  )
}

export default AppRoutes;
