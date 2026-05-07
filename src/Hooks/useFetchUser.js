import { useEffect, useState } from "react"


const useFetchUser=()=>{
    const[users,setUsers]=useState([])
    const[isError,setIsError]=useState(false)
    const[isLoading,setIsLoading]=useState(false)
    const getuser=async()=>{
        try{
            setIsLoading(true);
            let res=await fetch('https://dummyjson.com/users')
          let  data=await res.json()
          console.log(data)
            setIsLoading(false)
            setUsers(data.users)
           
        }catch(error){
            console.log(error)
            setIsError(true)
        }
    }
    useEffect(()=>{
        getuser()
    },[])
return{
    users,isError,isLoading
}
}
export default useFetchUser
