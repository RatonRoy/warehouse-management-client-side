import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useInventoryDetail = (InventoryId) => {
	// to read the product id 
	// const { InventoryId } = useParams()
	const [inventory, setInventory] = useState({});
	useEffect(() => {
		const url = `https://safe-hamlet-12951.herokuapp.com/${InventoryId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setInventory(data))
	}, [InventoryId])
	return [inventory] 
}
export default useInventoryDetail;
