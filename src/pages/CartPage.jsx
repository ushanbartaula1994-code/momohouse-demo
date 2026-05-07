import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { BsPlus } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function CartPage() {
  const Navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);
  const { cartItem } = state;
  console.log(cartItem);
  const TotalQty = cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  const totalAmount = cartItem.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  let shipping_Fee = 100;

  return (
    <main className="my-16 mx-7 px-5">
      {cartItem.length > 0 ? (
        <div className="both  flex   gap-10">
          <section className="w-[70%]  space-y-5 ">
            {cartItem.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className=" flex justify-between  pr-4 bg-white rounded-sm items-center  "
                >
                  <div className="flex  gap-x-4  items-center">
                    <div className="w-24 ">
                      <img className="w-full" src={cart.image} alt="" />
                    </div>

                    <div className="">
                      <h1 className="w-96 "> {cart.name} </h1>
                    </div>
                  </div>
                  <div>
                    <h1> Rs.{cart.caloriesPerServing}</h1>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "Delete",
                          payload: { id: cart.id },
                        });
                      }}
                    >
                      <MdDelete size={25} color="red" />
                    </button>
                  </div>
                  <div className="flex gap-x-1 flex-wrap ">
                    <button
                      onClick={() => {
                        dispatch({
                          type: "Increment",
                          payload: { id: cart.id },
                        });
                      }}
                      className="bg-gray-400    w-7 h-7 rounded-sm  hover:bg-gray-300  flex justify-center items-center    "
                    >
                      <BsPlus />
                    </button>
                    <p className="bg-gray-400    w-7 h-7 rounded-sm  hover:bg-gray-300  flex justify-center items-center    ">
                      {cart.qty}
                    </p>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "Decrement",
                          payload: { id: cart.id },
                        });
                      }}
                      className="bg-gray-400    w-7 h-7 rounded-sm  hover:bg-gray-300  flex justify-center items-center    "
                    >
                      <HiMiniMinusSmall />
                    </button>
                  </div>
                </div>
              );
            })}
          </section>

          <section className=" space-y-5  w-[28%] h-[350px] bg-white p-3 ">
            <div>
              <h1 className="text-2xl"> Order Summary</h1>
            </div>
            <div className="flex justify-between">
              <p> Subtotal ({TotalQty} items)</p>
              <p>Rs. {totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p> Shipping Fee</p>

              <p> Rs. {shipping_Fee}</p>
            </div>
            <div className="p-3 space-x-2">
              <input
                className="  outline-none  border rounded p-2 h-10  "
                type="text"
                placeholder="Enter voucher code"
              />
              <button className="bg-blue-500  p-2 w-24 h-10 text-white">
                APPLY
              </button>
            </div>
            <div className="flex justify-between">
              <p> Total</p>

              <p> Rs. {totalAmount + shipping_Fee}</p>
            </div>
            <div>
              <button

                onClick={() => {
                  Navigate("/payment", { state: totalAmount + shipping_Fee });
                }}
                className="bg-orange-500 p-3 w-full text-white"
              >
                
                Procced To checkout({TotalQty})
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="bg-white gap-y-3 p-5 w-96 m-auto flex flex-col  justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dCoIn5Ba8g1qCBrTYS1mhE7pJ57wJpQcDQ&s"
            alt="image"
          />
          <h1 className="italic">There is no cart item to show !</h1>
          <NavLink
            className="bg-orange-500 p-3 w-36 text-center text-white"
            to="/menu"
          >
            Show Now
          </NavLink>
        </div>
      )}
    </main>
  );
}

export default CartPage;