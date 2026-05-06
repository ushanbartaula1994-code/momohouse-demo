import { useState } from "react"
import Button from "../common/Button"
function Form() {
  const [firstName,setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [email ,setEmail]=useState("");
  const [select,setSelect]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [message,setMessage]=useState("");
const SendMessage=(e)=>{
  e.preventDefault();
  console.log(firstName,lastName,email,select,phoneNumber,message);
  setFirstName("");
  setLastName("");
  setEmail("");
  setPhoneNumber("");
  setMessage("");
}
 
  return (
    <form>
      <div className="flex space-x-3">
    <label  htmlFor="firstname"><p className="font-normal text-xl text-[#101828] pb-2">First Name</p>
    <input className="border border-[#DFE2E6] p-2 rounded-[5px]" type ="text" value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}
    placeholder=" "
    />
     </label>
     
     <label htmlFor="lastname">
      <p className="font-normal text-xl text-[#101828] pb-2">Last Name</p>
      <input className="border border-[#DFE2E6] p-2 rounded-[5px] w-full"  type="text" 
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      placeholder=" "
      />
     </label>
      </div>
      <br/>
      <label htmlFor="email">
        <p className="font-normal text-xl text-[#101828] pb-2">Email</p>

        <input className="border border-[#DFE2E6] p-2 rounded-sm w-[70%]" type="email"
         value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder=" "
        />
      </label>
      <br/>
      <label>
        <p className="pt-4">What can we do for you</p>
        <select className="border text-[#98A1B0] w-[70%] p-2 mb-4 rounded-[5px] border-[#DFE2E6]" value={select} onChange={(e)=>setSelect(e.target.value)}>
          <option  value=""> Choose</option>
        </select>

      </label >
      <br/>
      <label >Phone Number
        <div className="flex mt-3 border border-[#DFE2E6] w-[70%]">
        <div className="p-2"><select name="country Code">
            <option value="+977">NP+977</option>
          </select></div> 
        <div>
          <input className="border-0 p-2 w-full " type="number"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          placeholder=""/>
          </div>  
        </div>
      </label>
      <br/>
      <label>
        <p>Message</p>
        < textarea className="w-[90%] border border-[#DFE2E6] h-24" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="" />
      </label>
      <div className=" mt-4">
        <Button
        borderRadius="50px"
        backgroundColor="#D95103"
        height="40px"
        width="240px"
        color="white"
        onClick={(e)=>{
          SendMessage(e)

        }}

      >
        Send Message
      </Button>
      </div>
      
    </form>

  )
}

export default Form
