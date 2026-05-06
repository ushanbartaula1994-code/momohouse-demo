import Map from "../home/Map.jsx"
import Form from "../common/Form.jsx"
function MapForm() {
  return (
    <section className="flex pl-3">
    <div className="w-3/6"><Map/></div>
      <div className="p-2 w-3/6 flex flex-col items-center gap-2 ">
     
      <p className="w-[500px] flex flex-col">
         <span className="text-[#101828]">Contact Us</span>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
    <span> <Form/></span>  
      </div>
    </section>
  )
}

export default MapForm
