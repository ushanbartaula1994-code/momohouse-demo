import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function Menu() {
  const { products, isError, isLoading } = useFetch();
  const navigate = useNavigate();

  if (isError)
    return (
      <h1 className="text-center text-2xl text-red-500 mt-10">
        Error occurred while fetching the products
      </h1>
    );

  if (isLoading)
    return <h1 className="text-2xl font-bold text-center mt-10">Loading...</h1>;

  if (!products || products.length === 0)
    return <h1 className="text-center text-2xl mt-10">No products found</h1>;

  return (
    <main className="my-10 px-2 sm:px-4 md:px-10 lg:px-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => navigate("/productDetail", { state: item })}
              className="bg-white rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <div className="h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-t-xl object-cover"
                />
              </div>
              <div className="h-20 p-2 text-center">
                <h1>{item.name}</h1>
                <h1 className="text-orange-400 font-bold">
                  Rs. {item.caloriesPerServing}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Menu;
