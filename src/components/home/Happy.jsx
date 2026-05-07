import img from "../home/../../assets/images/img.png"


function Happy() {
  return (
    <section className="flex justify-around p-20 bg-[#FAFBFB]">
      <div className=" m-auto">
        <p className="font-bold text-[29px] text-[#101828]">200+ <span className="text-[#D95103]">Happy Customers</span></p>
        <p className="font-bold text-[19px] text-[#0C6967]">What our customers say about us</p>
        <p className="w-[400px] text-[#252D43] italic mt-8">“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”</p>
        <p className="text-[#101828] font-bold text-2xl my-6">Livia Dias</p>


      </div>
      <div>
        <img className="" src={img} alt="image"/>
      </div>

      
    </section>
  )
}

export default Happy
