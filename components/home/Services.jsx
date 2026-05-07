import { useNavigate } from "react-router-dom"
import Quality from "../home/../../assets/images/Quality.png"
import Party from "../home/../../assets/images/Party.png"
import Chef from "../home/../../assets/images/Chef.png"
import Button from "../common/Button"
import { IoIosArrowRoundForward } from "react-icons/io";

function Services() {
    const Navigate=useNavigate()
  return (
    <section className="p-14">
        <div className="toppart flex justify-around p-10">
            <div className=" flex flex-col text-center place-items-center ">
                <img className="w-[72px] h-[72px] mb-4" src={Quality} alt="quality" />
                <h1 className="font-bold mb-4">Quality Food </h1>
                <p className="w-3xs text-center text-sm">Only the best food with top quality products and ingridents </p>
            </div>
             <div className="flex flex-col text-center place-items-center">
                <img className="w-[72px] h-[72px] mb-4 " src={Party} alt="party" />
                <h1 className="font-bold mb-4 mr-3">Private Party</h1>
                <p className="w-3xs text-center text-sm">Get the best food for your Private parties and gatherings </p>
            </div>
             <div className="flex flex-col text-center place-items-center">
                <img className="w-[72px] h-[72px] mb-4 " src={Chef} alt="chef" />
                <h1 className="font-bold mb-4">Categring </h1>
                <p className="w-3xs text-center text-sm">Get the best food for any occasions and gatherings </p>
            </div>
        </div>


        <div className=" flex justify-center items-center">
            <Button
            borderRadius="50px"
            backgroundColor="#0C6967"
            color="white"
             height="65px"
               width="250px" 
            onClick={()=>{Navigate("/Services")
              
            }}


            >
                Explore Our Services 
                <IoIosArrowRoundForward size={35} />
                
            </Button>
            </div>
      
    </section>
  )
}

export default Services
