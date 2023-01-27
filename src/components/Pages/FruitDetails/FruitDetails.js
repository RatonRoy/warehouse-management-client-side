import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './FruitDetails.css'

const FruitDetails = () => {
  const { InventoryId } = useParams()
  const [inventory, setInventory] = useState({})
  useEffect(() => {
    const url = `https://warehouse-management-server-side-main.vercel.app/allinventory/${InventoryId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.name)
        setInventory(data)
      })
  }, [InventoryId])

  let quantity = inventory.quantity

  // const [quantityValue, setQuantity] = useState({inventory: });
  // console.log(quantityValue);
  // update Info
  const handleUpdatefruit = () => {
    quantity = quantity - 5
    const updatedQuantity = { quantity }
    // send data to the server
    const url = `https://warehouse-management-server-side-main.vercel.app/allinventory/${InventoryId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('success', data, updatedQuantity)
        // alert('fruit added successfully!!!');
        if (data.modifiedCount > 0) {
          // setQuantity(updatedQuantity);
        }
      })
    window.location.reload()
  }

  const handaleFruitAdd = (e) => {
    e.preventDefault()
    const addvalue = e.target.add.value
    const addNum = parseInt(addvalue)
    if (addNum >= 5) {
      quantity = quantity + addNum
      const updatedQuantity = { quantity }
      // send data to the server
      const url = `https://warehouse-management-server-side-main.vercel.app/allinventory/${InventoryId}`
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('success', data, updatedQuantity)
          // alert('fruit added successfully!!!');
          // setInventory(data)
        })
      window.location.reload()
    }
  }
  // end of update info
  return (
    <section className='manage-container'>
      <h1 className='manage-title'> Manage {inventory.name} </h1>
      <div className='manage-fruit-wrapper'>
        <div className='manage-fruit-img'>
          <img src={inventory.img} alt='' />
        </div>
        <article className='manage-fruit-info'>
          <div className='manage-fruit-data'>
            <div className='price-quantity'>
              <p> Price : {inventory.price}Taka/kg </p>
              <p> Quantity : {inventory.quantity}kg </p>
            </div>
            <div className='suppplier-sold'>
              <p> Supplier : {inventory.supplier}</p>
              <p> Sold : {inventory.sold}kg </p>
            </div>
          </div>
          <div className='description'>
            <p>{inventory.description}</p>
          </div>
          <div className='manage-fruit-btn-container'>
            <p>
              <button className='manage-fruit-btn' onClick={handleUpdatefruit}>
                Deliver 5Kg
              </button>
            </p>
            <p>
              <Link
                className='manage-fruit-btn'
                to={`/checkout/${InventoryId}`}
              >
                Place Order
              </Link>
            </p>
          </div>
          <form onSubmit={handaleFruitAdd}>
            <input
              type='text'
              placeholder='Add min 5 kg'
              name='add'
              className='add-input'
            />
            <input type='submit' value='Add Fruit' className='add-btn' />
          </form>
        </article>
      </div>
    </section>
  )
}

export default FruitDetails
