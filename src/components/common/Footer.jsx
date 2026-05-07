import logo from '../common/../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiMusicLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
function Footer() {
  return (
    <div className='flex flex-col  pt-10 pl-20 pr-20 pb-20'>
      <div className='upperpart  flex justify-around p-10'>
        <div>
        <div className='flex'>
          <img src ={logo} alt="logo" className='h-8 pr-2'/>
          <p className='text-green-800 font-bold text-2xl'>momos</p>
        </div>
        <div  className=''><p className='text-xs text-gray-600 leading-loose w-72'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut modi officiis accusamus? Quae cumque tempora ratione porro ad esse debitis laboriosam doloribus repudiandae consectetur saepe aliquam odio, quasi, velit inventore?</p></div>
        </div>
        <div className='space-y-2'>
           <p className='text-green-800 font-bold text-xl'>momos</p>
           <nav className='flex flex-col text-sm space-y-1'>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/menu">Our Menu</NavLink>
            <NavLink to="/services">Our Services</NavLink>
             <NavLink to="/contact">Contact Us</NavLink>

           </nav>

        </div>
        <div className='space-y-2'>
          <p className='text-green-800 font-bold text-xl'>Legals</p>
          <nav className='flex flex-col text-sm space-y-1'>
            <NavLink to=" ">Terms & Conditions</NavLink> 
            <NavLink to=" ">Privacy</NavLink> 
            <NavLink to=" ">Support</NavLink> 
            </nav>
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-green-800 font-bold text-xl space-y-2'>Follow Us</p>
         <div className='flex flex-col'>
          <div className='flex pt-2 space-x-3 space-y-2'><FaFacebook size={25} color='#A6AEBB' /><IoLogoLinkedin size={25} color='#A6AEBB' /><CiTwitter size={25} color='#A6AEBB' /></div>
           <div className='flex space-x-3 space-y-2'> <FaYoutube size={25} color='#A6AEBB' /><FaInstagramSquare size={25} color='#A6AEBB' /> <RiMusicLine  size={25} color='#A6AEBB'/></div> 
          </div> 
        </div>
      </div>
     <hr className='border-gray-300'/>
      <div className='lowerpart p-5'>
        <div className='flex justify-center text-xs text-gray-600'>copyright ©2023 Everest Momo Pvt Ltd .All Rights Reserved </div>
        </div>     
    </div>
  )
}

export default Footer
