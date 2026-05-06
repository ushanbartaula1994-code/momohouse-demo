import { useEffect, useState } from "react"

const useFetch=()=>{
  const [products,setProduct]=useState([])
  const [isError,setIsError]=useState(false)
  const [isLoadig,setIsLoading]=useState(false) 
  const getProduct=async()=>{
    try{
        setIsLoading(true);
        let res= await fetch('https://dummyjson.com/recipes')
        res=await res.json();
        setIsLoading(false);
        setProduct(res.recipes);
    }catch(error){
        console.log(error);
        setIsError(true);

    }
  }
  useEffect(()=>{
    getProduct()
  },[])
  return{
    products,isError,isLoadig
  }
};

export default useFetch;