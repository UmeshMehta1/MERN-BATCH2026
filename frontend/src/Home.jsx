import React, { useEffect, useState } from 'react'
import About from './About'

const Home = () => {

  const [data, setData] = useState(0)

  const increment = () => {
    if(data<10){
    setData(data + 1)
    }else{
          alert("You have reached 10")
    }
  }

  
   const decrement = () => {

    if(data<=0){
      alert("Value cannot be less than 0")
      return
    }
    setData(data - 1)
  }

  useEffect(()=>{
    console.log("Component Mounted or Updated")
  },[data])

  return (
    <div>
      <h1>{data}</h1>

<button onClick={increment}>inc</button>
<button onClick={decrement}>dec</button>
    </div>
  )
}


export default Home
