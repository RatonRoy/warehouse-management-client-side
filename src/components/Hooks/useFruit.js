import { useEffect, useState } from 'react'

const useFruits = () => {
  const [fruits, setFruit] = useState([])
  useEffect(() => {
    fetch(
      'https://warehouse-management-server-side-main.vercel.app/allinventory'
    )
      .then((res) => res.json())
      .then((data) => setFruit(data))
  }, [])
  return [fruits, setFruit]
}

export default useFruits
