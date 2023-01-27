import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../../../firebase.init'
import axios from 'axios'

const Checkout = () => {
  const { InventoryId } = useParams()
  const [user] = useAuthState(auth)
  const [inventory, setInventory] = useState({})
  useEffect(() => {
    const url = `https://warehouse-management-server-side-main.vercel.app/allinventory/${InventoryId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data))
  }, [])
  const { name, img, supplier, price, quantity, description, sold } = inventory

  const handlePlaceOrder = (event) => {
    event.preventDefault()
    const order = {
      email: user.email,
      fruit: name,
      inventoryId: InventoryId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    }
    axios
      .post(
        'https://warehouse-management-server-side-main.vercel.app/order',
        order
      )
      .then((response) => {
        const { data } = response
        if (data.insertedId) {
          toast('Your order is booked!!!')
          event.target.reset()
        }
      })
  }
  return (
    <div className='w-50 mx-auto'>
      <h2>Please Order: {name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className='w-100 mb-2'
          type='text'
          value={user?.displayName}
          name='name'
          placeholder='name'
          required
          readOnly
          disabled
        />
        <br />
        <input
          className='w-100 mb-2'
          type='email'
          value={user?.email}
          name='email'
          placeholder='email'
          required
          readOnly
          disabled
        />
        <br />
        <input
          className='w-100 mb-2'
          type='text'
          value={name}
          name='fruit'
          placeholder='fruit'
          required
          readOnly
        />
        <br />
        <input
          className='w-100 mb-2'
          type='text'
          name='address'
          placeholder='address'
          autoComplete='off'
          required
        />
        <br />
        <input
          className='w-100 mb-2'
          type='number'
          name='phone'
          placeholder='phone'
          required
        />
        <br />
        <input className='btn btn-primary' type='submit' value='Place Order' />
      </form>
    </div>
  )
}

export default Checkout
