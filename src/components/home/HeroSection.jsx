import { useNavigate } from "react-router-dom";
import Ellipse from "../../assets/images/Ellipse.png";
import momo from "../../assets/images/momo.png";
import oneBg from "../../assets/images/oneBg.png";
import Button from "../common/Button";
import { IoIosArrowRoundForward } from "react-icons/io";


function HeroSection() {
  const Navigate = useNavigate();
  return (
    <section className="flex  p-2  justify-end">
      <div className=" text space-y-1 h-96 p-3  mr-24 mt-20  ">
        <p>RESTAURANT</p>
        <h1 className="text-[61px]  font-bold">
       
          <span
            style={{
              backgroundImage: `url(${oneBg})`,
            }}
            className="  inline-block w-56 text-center h-20   bg-cover  bg-no-repeat text-white  "
          >
            #One
          </span>
        </h1>
        <h1 className="text-[61px]  font-bold  ">
          Momo <span className="text-[#D95103]"> Restaurant </span>
        </h1>
        <p className="text-[25px]  mb-8  font-bold ">
          More than <span className="text-[#D95103]"> 20+ Varieties </span> of
          momo available for you
        </p>
        <Button
          borderRadius="50px"
          backgroundColor="#0C6967"
          color="white"
          onClick={() => {
            Navigate("/menu");
          }}
          height="65px"
          width="250px"
        >
          Explore Food Menu
          <IoIosArrowRoundForward size={35} />
          
        </Button>
      </div>
      <div className="image  flex justify-end items-center   overflow-hidden relative  w-[35%] h-[630px]   ">
        <img
          className="absolute   bottom-10  h-full  "
          src={Ellipse}
          alt="Ellipse"
        />
        <img className="absolute w-96  right-16  " src={momo} alt="momo" />
      </div>
    </section>
  );
}

export default HeroSection;