import { useEffect, useState } from "react";

const useFruits = () => {
	const [fruits, setFruit] = useState([]);
	useEffect(() => {
		fetch('https://safe-hamlet-12951.herokuapp.com/allinventory')
			.then(res => res.json())
			.then(data => setFruit(data));
	}, [])
	return [fruits, setFruit];
}

export default useFruits;
