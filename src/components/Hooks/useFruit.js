import { useEffect, useState } from "react";




const useFruits = () => {
	const [fruits, setFruit] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/allinventory')
			.then(res => res.json())
			.then(data => setFruit(data));
	}, [])
	return [fruits, setFruit]
}

export default useFruits;