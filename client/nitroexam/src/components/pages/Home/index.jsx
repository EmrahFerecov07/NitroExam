import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import { Helmet } from "react-helmet";
import AboutUs from '../AboutUs';
import { Link } from 'react-router-dom';



const HomePage = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch("http://localhost:5500/api/product")
    const jsonData = await res.json()
    setData(jsonData)
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <AboutUs />
      </div>

      <div>
        {data && data.map((item) => (
          <ul key={item._id}>
            <Link to={`/product/${item._id}`}><img style={{ width: "200px" }} src={item.image} alt="" /></Link>
            <li>{item.title}</li>
            <li>${item.price}</li>
            <br />
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </ul>
        ))}
      </div>
      <Helmet>
        <title>Home</title>
      </Helmet>



    </>

  )
}

export default HomePage