import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useInventoryDetail = (inventoryId) => {
	// to read the product id 
	const { InventoryId } = useParams()
	const [inventory, setInventory] = useState({});
	useEffect(() => {
		const url = `http://localhost:5000/allinventory/${InventoryId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setInventory(data))
	}, [inventoryId])
	return [inventory] 
}
export default useInventoryDetail;