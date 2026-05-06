
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Form from "../common/Form.jsx" 
function Intouch(){
  return (
    
    <section className="  flex flex-col p-8">
        <div className=" m-auto text-center mb-3 p-2">
            <p className="font-bold text-[#101828] text-4xl">Get <span className="text-[#D95103]">In Touch</span></p>
            <p className="text-[#0C6967] font-bold text-2xl">Our Friendly team would love to hear from you</p>
        </div>

        < div className=" p-2.5 flex justify-around">
            <div className="w-[430px] bg-[#0C6967] rounded-xl p-6">
                <p className="  flex items-center bg-[#0C6967]  gap-2 text-white px-3 py-2">
                    <IoLocationOutline className="text-white " size={20} /><span className="font-semibold text-xl"  >Our Address</span> </p>
                    <p className="text-white italic w-[300px]">New Baneshwor, Kathmandu, Bagmati, Nepal</p>
               <p className="flex  items-center bg-[#0C6967]  gap-2 text-white px-3 py-2"><LuPhone /><span className="font-semibold text-xl">
                   Our Contacts </span></p> 
                   <div className="flex w-[200px] justify-between">
                   <div className="text-white flex flex-col font-semibold">Mobile
                   <p className="text-white italic">980 5689789</p>
                    <p className="text-white italic">9841 275897</p>
                    </div>

                   <div className="text-white font-semibold">Landline
                    <p className="text-white italic">01-4783972</p>
                   </div>
                   </div>
                  <p className="  flex items-center bg-[#0C6967]  gap-2 text-white px-3 py-2">
                    <FaRegClock size={20} /><span className="font-semibold text-xl">Our Service Time</span>
                    </p>
                    <div className="flex space-x-10">
                       <div className="flex flex-col"><p className="text-white font-semibold">MON - FRI</p> 
                       <p className="text-white italic">10 am - 8 pm</p>
                       </div>

                       <div className="flex flex-col"><p className="text-white font-semibold">SAT - SUN</p>
                       <p className="text-white italic">Closed</p>
                       </div> 
                    </div>
                    <div className=" pt-20 pb-20"><p className="text-white italic font-normal text-xl">Get in touch in social network</p>
                    <div className="flex space-x-4 mt-4">
                       <NavLink to="" ><FaFacebook className="rounded-xl text-white" size={20} /></NavLink>
                     <NavLink to=""> <FaInstagram className="rounded-xl text-white" size={20} /></NavLink>  
                     <NavLink to=""><IoLogoTiktok className="rounded-xl text-white" size={20} /></NavLink>   
                    </div>
                    </div>

            </div>
            < div className="w-[587px]">
             <Form/>
            </div>
    </div>
      
    </section>
    
  )
}

export default Intouch
