import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams()

    const [data, setData] = useState([])

    const fetchData = async () => {
      const res = await fetch(`http://localhost:5500/api/product/${id}`)
      const jsonData = await res.json()
      setData(jsonData)
        console.log(jsonData);
    }
  
    useEffect(() => {
      fetchData()
    }, []);

  return (
    <>
    
    <div>
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
        </div></>
  )
}

export default Detail