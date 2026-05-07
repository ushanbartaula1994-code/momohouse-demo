import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function FilterSection() {
  const { products, isError, isLoading } = useFetch();
  const [filterItems, setFilterItems] = useState([]);
  const navigate=useNavigate()


  console.log(products)
  const filterProduct = (country = "Pakistani") => {
    const filter = products.filter((item) => {
      return item.cuisine == country;
    });
    setFilterItems(filter);
  };

  useEffect(() => {
    filterProduct();

  }, [products]);

  return (
    <main className="flex flex-col justify-center items-center  gap-y-4 border p-3 ">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">Our Most Papular Food menu </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, autem?
        </p>
      </section>
      <section className="flex gap-x-4">
        <Button
          onClick={() => {
            filterProduct("Pakistani");
          }}
          border="1px solid black "
          width="100px"
          borderRadius="20px"
          height="35px"
        >
          Pakistani
        </Button>

        <Button
          border="1px solid black "
          width="100px"
          borderRadius="20px"
          height="35px"
          onClick={() => {
            filterProduct("Mexican");
          }}
        >
          Mexican
        </Button>

        <Button
          border="1px solid black "
          width="100px"
          borderRadius="20px"
          height="35px"
          onClick={() => {
            filterProduct("Italian");
          }}
        >
          Italian
        </Button>
      </section>
      <section>
        {isError && <h1> error while fetching data </h1>}

        {!isLoading && filterItems.length > 0 ? (
          <div  className="flex gap-3 flex-wrap justify-center items-center">
            {filterItems.map((product) => {
              return (
                <div  key={product.id}    className="  bg-white rounded-xl w-54" >
                  <div className="h-48 ">
                    <img  className="w-full h-full   rounded-t-xl  " src={product.image} alt="" />
                  </div>

                  <div className="h-20 p-2 text-center">
                    <h1>{product.name}</h1>
                    <h1  className="text-orange-400 font-bold" >Rs. {product.caloriesPerServing}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading.....</div>
        )}
      </section>

      <section>
        <Button
          width="200px"
          borderRadius="30px"
          color="white"
          height="50px"
          backgroundColor="#358af2"
          onClick={()=>{
            navigate("/menu")
          }}
        >
          Explore Our menu{" "}
        </Button>
      </section>
    </main>
  );
}

export default FilterSection;