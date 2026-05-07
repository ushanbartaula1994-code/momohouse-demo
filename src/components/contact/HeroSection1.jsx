import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaClock } from "react-icons/fa6";

function HeroSection1() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="upperpart  flex flex-col justify-center items-center h-64 gap-8">
        
        <p className="text-[#0C6967] italic text-5xl ">Our Contact</p>
        <div className="flex flex-col justify-center items-center ">
        <p className="text-[#6B788E] text-xl">GET IN TOUCH</p>
        <p className="text-[#D95103] font-bold text-xl">Our Friendly Team <span className="text-[#101828] ">would love to hear from you</span></p>
        </div>
      </section>
      <section className=" flex w-5xl p-2 gap-3">
        <div className="flex flex-col justify-around items-center h-48 p-2 border border-gray-200 shadow-md rounded-lg">
            <div className="flex gap-2">
            <span>
            <FaLocationDot className="text-[#D95103] pt-1 " size={25} /> 
            </span>
            <p className="text-xl font-bold text-[#101828]">LOCATION</p>
        </div>
        <p className="text-[#252D43] text italic w-3xs pl-6 pb-6 font-bold">New Baneshwor -41201, Kathmandu, Bagmati, Nepal</p>
        </div>
      <div className=" flex flex-col justify-around items-center h-48 p-2 border border-gray-200 shadow-md rounded-lg">
  <div className="flex gap-2 items-center">
    <FiPhoneCall className="text-[#D95103]" size={25} />
    <p className="font-bold text-xl">PHONE</p>
  </div>

  <div className="grid grid-cols-2 gap-x-4 gap-y-2  p-3 w-full text-sm">
    <p className="text-[#0C6967] font-semibold">Mobile:</p>
    <p className="font-semibold">(+977) 98056 89789</p>

    <p className="text-[#0C6967] font-semibold"></p>
    <p className="font-semibold">(+977) 9841 275897</p>

    <p className="text-[#0C6967] font-semibold">Tel:</p>
    <p className="font-semibold">01-4783972</p>
  </div>
</div>

  <div className=" flex flex-col justify-around items-center w-[330px] h-48 p-2 border border-gray-200 shadow-md rounded-lg">
  <div className="flex gap-2 items-center">
    <FaClock  className="text-[#D95103]" size={25} />
    <p className="font-bold text-xl">SERVICES</p>
  </div>

  <div className="grid grid-cols-2 gap-x-4 gap-y-2  p-3 w-full text-sm">
    <p className="text-[#0C6967] font-semibold ">MON-FRI:</p>
    <p className="font-semibold  text-sm italic">8 AM - 8 PM </p>


    <p className="text-[#0C6967] font-semibold">SAT-SUN</p>
    <p className="font-semibold text-[#252D43] text-sm italic pl-2">Closed</p>
  </div>
</div>


      </section>
     
    </main>
  )
}

export default HeroSection1
