import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  
  useEffect(()=>{
    const getData = async () => {
      const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=cartagena&appid=c9144b1482b501560d8aeb4b5b587356")
      const datos = await res.json()

      console.log(datos);
      setData(datos);
    }

    getData();
  },[]);
  

  return (
    <>
     <h1>hola mundo</h1>
    </>
  )
}

export default App
