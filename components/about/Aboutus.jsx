import Group7 from "../../assets/images/Group7.png"
function Aboutus() {
  return (
    <section className=" flex justify-around">
        <div>
            <p className="italic text-[#0C6967] text-2xl p-20">About us</p>
            <p className="text-[#6B788E] text-xs pl-20 pb-5">WE PRIDE OURSELF ON</p>
            <p className="text-[#D95103] pl-20 font-bold text-2xl">Our authentic momo recipes</p>
            <p className="text-[#101828] pl-20 font-bold text-2xl w-[400px]">passed down through generations</p>
        </div>
        <div className="h-[600px]">
            <img src={Group7}/>

        </div>
      
    </section>
  )
}

export default Aboutus
