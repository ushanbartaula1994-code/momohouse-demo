import momolove2 from "../home/../../assets/images/momolove2.png"
import momoloveside from"../home/../../assets/images/momoloveside.png"
function Handcrafted() {
  return (
    <section className="flex p-20 justify-around  h-[440px]">
        <div className="relative">
            <img className="relative w-full h-full" src={momolove2}/>
            <img className="absolute bottom-[-42px] right-[-72px] w-[170px] h-[120px]" src={momoloveside}/>

        </div>

        <div>
            <p className="text-2xl font-bold text-[#101828] w-[300px]  ">Taste the difference with<span className="text-[#D95103]"> our handcrafted momos</span> </p>
            <p className="text-[#6B788E] w-[300px] text-xs mt-3">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
        </div>
      
    </section>
  )
}

export default Handcrafted
