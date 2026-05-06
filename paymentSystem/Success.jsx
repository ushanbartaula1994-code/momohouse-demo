import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
function Success() {
  const { dispatch } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  let res = JSON.parse(atob(searchParams.get("data")));
  useEffect(() => {
    dispatch({ type: "ClearCart" });
  }, []);
  return (
    <div className="w-96 my-5   m-auto bg-white flex flex-col items-center justify-center">
      <div className=" w-72">
        <img
          className="w-full"
          src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
          alt=""
        />
      </div>
      <div className="  flex flex-col  p-5 items-center  ">
        <h1 className="text-2xl font-bold">Payment is Success !</h1>
        <h1>Status:{res.status}</h1>
        <h1>Total Amount:Rs.{res.total_amount}</h1>
        <h1>transaction_code:{res.transaction_code}</h1>
      </div>
    </div>
  );
}

export default Success;