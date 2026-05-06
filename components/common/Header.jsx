import { NavLink } from "react-router-dom";
import logo from "../common/../../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
function Header() {
  const { state } = useContext(CartContext);
  const { cartItem } = state;
  const TotalQty = cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <header className="flex justify-around items-center   p-8 ">
      <nav className="flex items-center gap-3">
        <img src={logo} alt="logo" />
        <NavLink className="text=[#0C6967]   font-bold text-2xl " to="/">
          momos
        </NavLink>
      </nav>
      <nav className="flex gap-3 items-center">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice"> Allergy Advice</NavLink>
        <NavLink to="/cartPage">
          <p className="bg-gray-700  rounded-full w-5 h-5 text-white flex justify-center items-center text-sm">
            {" "}
            {TotalQty}
          </p>
          <FaCartArrowDown size={20} color="red" />
        </NavLink>
      </nav>
      <nav>
        <NavLink
          className="  bg-[#D95103]  px-4 py-3 text-white rounded-4xl "
          to="/contact"
        >
          Contact Us
        </NavLink>
      </nav>
      <nav>
        <div className="   group  relative   ">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
            alt="user"
          />
          <div className=" hidden group-hover:flex">
            <div className="bg-white    absolute  p-4    shadow-xl  shadow-gray-700 flex flex-col">
              <NavLink className="hover:underline" to="/profile">
                Profile
              </NavLink>
              <NavLink className="hover:underline" to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;