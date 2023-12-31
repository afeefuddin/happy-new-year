"use client"

import { useState } from "react"
import styles from '@/styles/future.css'
import axios from "axios"
import Loader from "@/Components/Loader"

function page() {
    const [name,setName] = useState('')
    const [response,setResposne] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false);
    async function handleclick(){
        setError(false)
        if(name.length==0){
            return;
        }
        setResposne('')
        setLoading(true)
        console.log(name);
        try {
            const headers = {
                name : name
            }
            const response = await axios.get(`api/?name=${name}`);
            console.log(response);
            setResposne(response.data.response);
            setLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            setError(true)
          }
    }
  return (
    <div className="min-h-screen" >
         <div className="absolute h-full w-full overflow-hidden -z-10">
         <div className="absolute w-full art"></div>

         </div>
         <div className="flex flex-col items-center h-screen ">
            <div className="h-3/5 flex flex-col justify-between">

            <div className="text-3xl h-3/6 flex flex-col justify-center"><h1 className="text text-3xl text-center p-2 md:text-5xl font-medium">Predict your 2024 with AI</h1></div>
            <div className="flex flex-col gap-6 w-full items-center">

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-950 pt-2 pb-2 pl-4 pr-4 w-4/5 sm:w-1/2 text-lg outline-none" placeholder="Enter your name" />
        <button className="bg-white text-black pt-1 pb-1 pl-8 pr-8 rounded-full text-xl" onClick={()=>{
            handleclick()
        }}>Start</button>
        {/* {response &&  <div><ResponseAI /></div>} */}
        </div>
        
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
        {error && <div className="text-lg">There was an error predicting your future. Please retry 😔</div>}
        {loading && <div><Loader /></div>}
        <div className="text-center sm:w-3/5">{response}</div>
            </div>
         </div>
    </div>
  )
}

export default page