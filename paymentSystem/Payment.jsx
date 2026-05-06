import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import CryptoJS from "crypto-js";

function Payment() {
  const location = useLocation();
  const totalAmount = location.state;
const transaction_uuid=uuidv4()
let message=`total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
 var hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
 var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);



  return <div>
 <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
 <input type="hidden" id="amount" name="amount" value={totalAmount} required/>
 <input type="hidden" id="tax_amount" name="tax_amount" value ="0" required/>
 <input type="hidden" id="total_amount" name="total_amount" value={totalAmount} required/>
 <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required/>
 <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required/>
 <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required/>
 <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
 <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/success" required/>
 <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/fail" required/>
 <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
 <input type="hidden" id="signature" name="signature" value={hashInBase64} required/>
 <h1 className="text-2xl">Rs.{totalAmount}</h1>
 <input className="bg-amber-700 p-3 w-30 text-white" value="Submit" type="submit"/>
 </form>
 
  </div>;
}

export default Payment;