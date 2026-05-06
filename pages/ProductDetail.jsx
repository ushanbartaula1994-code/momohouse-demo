import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
function ProductDetail() {

  const Navigate=useNavigate()
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const product = location?.state;
  const { dispatch } = useContext(CartContext);
  return (
    <main className="my-10">
      {/* Images  */}
      <section className="flex w-[90%]  gap-x-3    m-auto my-10  p-3 bg-white ">
        <div className="w-64">
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div className="p-5   space-y-5 ">
          <h1 className="text-2xl">{product.name}</h1>
          <h1 className="font-bold  text-yellow-900">
            Rating:({product.rating})
          </h1>
          <h1 className="text-orange-500 font-bold">
            Rs.:{product.caloriesPerServing}
          </h1>

          <div className="  Quantity flex gap-x-3 items-center">
            <p> Quantity</p>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="bg-gray-500    rounded-sm w-8 flex justify-center items-center h-7    text-white   hover:bg-gray-200   hover:text-black"
            >
              +
            </button>
            <p className="bg-gray-500 w-8    rounded-sm flex justify-center items-center h-7    text-white   hover:bg-gray-200   hover:text-black">
              {counter}
            </p>
            <button
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
              className="bg-gray-500    rounded-sm w-8 flex justify-center items-center h-7    text-white   hover:bg-gray-200   hover:text-black"
            >
              -
            </button>
          </div>

          <div className=" Add_to_cart flex  gap-x-3 ">
            <Button
              onClick={() => {
                Navigate("/payment", {
                  state: product.caloriesPerServing * counter,
                });
              }}
              backgroundColor="#2abbe8"
              width="200px"
              height="50px"
              borderRadius="2px"
              color="white"
            >
              Buy Now
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: "AddToCart", payload: product });
              }}
              backgroundColor="#f57224"
              width="200px"
              height="50px"
              borderRadius="2px"
              color="white"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </section>

      {/* details */}
      <section className="w-[90%]  m-auto  p-5 bg-white  ">
        <div className="flex  gap-7">
          <div>
            {" "}
            <h1 className="text-2xl font-bold"> Instructions</h1>
            {product?.instructions?.map((instructions, index) => {
              return (
                <ol key={index} className="">
                  <li className="text-sm italic">
                    {index + 1}. {instructions}{" "}
                  </li>
                </ol>
              );
            })}
          </div>
          <div>
            <h1 className="text-2xl font-bold"> Ingredients</h1>

            {product?.ingredients?.map((ingredients, index) => {
              return (
                <ol key={index} className="">
                  <li className="text-sm italic">
                    {index + 1}. {ingredients}
                  </li>
                </ol>
              );
            })}
          </div>
        </div>

        <div className="flex gap-x-6 italic py-5">
          <h1>*CookTimeMinutes:{product.cookTimeMinutes}min. </h1>
          <h1>*Cuisine:{product.cuisine} </h1>
          <h1>*Difficulty:{product.difficulty} </h1>
          <h1>*PrepTimeMinutes:{product.prepTimeMinutes}min. </h1>
          <h1>*ReviewCount:{product.reviewCount} </h1>
          <h1>*Servings:{product.servings} </h1>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;