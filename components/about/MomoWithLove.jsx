import momowithlove from "../home/../../assets/images/momowithlove.png"
import momo2 from "../home/../../assets/images/momo2.png"

function MomoWithLove() {
  return (
    <section className="flex  justify-around p-20 h-[440px] ">
      <div>
        <p className="text-[#101828] font-bold text-2xl w-[300px]">Our momos are <span className="text-[#D95103]">made with love</span></p>
        <p className="text-[#6B788E] text-xs w-[300px] mt-3">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
      </div>
      <div className="relative">
        <img className="relative w-full h-full" src={momowithlove}/>
        <img className="absolute bottom-[-29px] left-[-102px] w-[170px] h-[120px]" src={momo2}/>
      </div>
    </section>
  )
}

export default MomoWithLove
