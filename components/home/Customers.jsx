import { Navigate, useNavigate } from "react-router-dom"
import Rectangle1 from "../../assets/images/Rectangle1.png";
import pngwing from "../../assets/images/pngwing.png";
import Group from "../../assets/images/Group.png";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

function Customers() {
    const Navigate=useNavigate()

  return (
    <section className=" flex p-10">
      <div className=" relative ml-32">
        <img className="relative h-[90%] top-14 overflow-hidden" src={Group} alt="image"/>
        <img className="absolute top-1 h-full left-8" src={pngwing} alt="photo"/>
      </div>
      <div className="secondpart  m-auto">
        <p className="font-black text-2xl">Why Customers <span className="text-[#D95103]">Loves Us</span> </p>
        <p className="w-[500px] mt-5 mb-7 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, sapiente error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta illo praesentium laborum iure debitis consequuntur a officiis ut necessitatibus! </p>

        <Button 
        borderRadius="50px"
        backgroundColor="#0C6967"
        color="white"
        onClick={()=>{
          Navigate("/About")
        }}
         height="55px"
          width="250px"
        >
          Explore Our Story  <IoIosArrowRoundForward size={35} />
        </Button>
      </div>

     
      
    </section>
  )
}

export default Customers
