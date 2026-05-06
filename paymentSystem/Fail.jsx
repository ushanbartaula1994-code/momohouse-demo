import React from "react";
import { NavLink } from "react-router-dom";

function Fail() {
  return (
    <div>
      <div className="w-96 my-5   m-auto bg-white flex flex-col items-center justify-center">
        <div className=" w-72">
          <img
            className="w-full"
            src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png"
            alt=""
          />
        </div>
        <div className="  flex flex-col  p-5 items-center  ">
          <h1 className="text-2xl font-bold">Payment is fail !</h1>
          <NavLink className='bg-amber-700 rounded-sm p-2 text-white mt-3 '   to="/cartPage">try again </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Fail;