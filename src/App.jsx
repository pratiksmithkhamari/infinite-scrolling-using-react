import { useEffect, useState } from 'react'

import './App.css'
import Shimmer from './Shimmer'

function App() {
  const [value, setValue] = useState([])
  const [showShimmer,setShowShimmer] = useState(false)
      const fetchData=async() =>{
        setShowShimmer(true)
        const data =   await fetch('https://dummyjson.com/products?limit=20')
        const  json = await data.json()
        console.log(json);
        setValue(prevVal=>[...prevVal,...json.products])
        setShowShimmer(false)
      }
      
      useEffect(()=>{
        
        fetchData()

        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
         
          
      },[])

      const handleScroll =()=>{
        
        if( window.scrollY + window.innerHeight >= document.body.scrollHeight -5){
          console.log('pkpk');
          fetchData()
        }
      }

  return (
    <>
    <h2 className='capitalize bg-black text-white text-[2rem] mb-6'>infinte scrolling using react </h2>
    
    <div className='flex-wrap flex gap-3 justify-center items-center'>
     
      { value?.map((val,i)=>{
        return (
          <div className='flex flex-wrap gap-4 items-center justify-center ' key={i}>
            <div className='h-56 w-52 border p-3 rounded-sm border-black'>
            <img src={val.images ?val.images:val.images[1] } alt="" />
            <h2>{val.title}</h2>
            </div>
          </div>
        )
      })}
      {showShimmer && <div className='flex flex-wrap gap-3 justify-center items-center'>
        <Shimmer />
     </div>}
      </div>
     
    </>
  )
}

export default App
