import rightmarcus from "../home/../../assets/images/rightmarcus.png"
// import marcus from "../home/../../assets/images/marcus.png"
import Button from "../common/Button"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import useFetchUser from "../../Hooks/useFetchUser";
import useUserIndex from "../../Hooks/useNavigation";

function Ceo() {
  const {users,isLoading,isError}=useFetchUser();
  const {index,next,prev}=useUserIndex(users.length)
  return (
    <section className="my-10 flex">
      {isError && (
        <h1 className="text-center text-2xl text-red-600 mt-10">Error while fetching</h1>
      )}
      {!isLoading && users?.length>0?(
        <div className="flex w-full">
          <div className="leftside w-[55%] h-[560px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
          style={{backgroundImage:`url(${rightmarcus})`}}
          >
            <div className="w-[400px] text-white">
              <p className="text-6xl">
                {users[index].university}
              </p>
             
              <p className="font-bold text-2xl pt-9">
                {users[index].firstName} {users[index].lastName}
                </p>
                 <p className="text-small">
                {users[index].company?.title}
              </p>
                           
            </div>
            <div className="border border-white rounded-[50%] w-8 h-8 flex items-center justify-center absolute bottom-16 right-20">
              <Button 
              height="10px"
              color="white"
              onClick={next}
              >
                <FaArrowRight />

              </Button>
            </div>
            <div className="border w-8 h-8 flex items-center justify-center absolute bottom-16 right-32 border-white rounded-[50%]">
              <Button
              height="10px"
              color="white"
              onClick={prev}
              >
                <FaArrowLeft />
              </Button>

            </div>

          </div>
          <div className="rightpart h-[560px] w-[45%] bg-cover bg-center bg-no-repeat"
          style={{backgroundImage:users[index]? `url(${users[index].image})`:"none",}}>
          </div>

        </div>
        
      ):(
        <h1 className="text-2xl font-bold text-center mt-10">loading....</h1>
      )

      }

    </section>
  )
}

export default Ceo
