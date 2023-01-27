import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useInventoryDetail = (InventoryId) => {
  // to read the product id
  // const { InventoryId } = useParams()
  const [inventory, setInventory] = useState({})
  useEffect(() => {
    const url = `https://warehouse-management-server-side-main.vercel.app/${InventoryId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data))
  }, [InventoryId])
  return [inventory]
}
export default useInventoryDetail
