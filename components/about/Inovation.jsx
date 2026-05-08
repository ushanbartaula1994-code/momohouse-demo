import inovation from "../../assets/images/inovation.png"
import inovationmomo from "../../assets/images/inovationmomo.png"

function Inovation() {
  return (
    <section className="flex  justify-around p-20 h-[440px]">
        <div className=" ">
           <p className="w-[290px] text-2xl font-bold text-[#101828] ">Our momos are the perfect <span className="text-[#D95103]">blend of tradition </span>and <span className="text-[#D95103]">innovation</span></p> 
           <p className="text-[#6B788E] w-[300px] text-xs mt-3 ">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>

        </div>
        <div className="relative">
              <img className="relative w-full h-full" src={inovation}/>
                    <img className="absolute bottom-[-29px] left-[-72px] w-[170px] h-[120px]" src={inovationmomo}/>

        </div>
      
    </section>
  )
}

export default Inovation
