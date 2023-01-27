import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Fruit from '../Fruit/Fruit'
import './Inventory.css'

const Inventory = () => {
  const [fruits, setFruit] = useState([])
  useEffect(() => {
    fetch('https://warehouse-management-server-side-main.vercel.app/inventory')
      .then((res) => res.json())
      .then((data) => setFruit(data))
  }, [])
  return (
    <section id='inventory' className='container'>
      <h1 className='section-title'> Inventory </h1>
      <div className='fruits-container section-center'>
        {fruits.map((fruit) => (
          <Fruit key={fruit._id} fruit={fruit}></Fruit>
        ))}
      </div>
      <Link
        className='btn btn-info w-25 p-2 mx-auto d-block'
        to='/allinventory'
      >
        {' '}
        All Fruits{' '}
      </Link>
    </section>
  )
}

export default Inventory
