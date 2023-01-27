import React from 'react'
import Contact from './Contact/Contact'

import './Home.css'
import Inventory from './Inventory/Inventory'
import Review from './Review/Review'
import Stocks from './Stocks/Stocks'

const Home = () => {
  /* const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('https://warehouse-management-server-side-main.vercel.app/user')
			.then(res => res.json())
			.then(data => setUser(data));
	}, []) */

  /* const handledeleteUser = (id) => {

		const process = window.confirm("Are you sure want to delete this item ?");
		if (process) {
			console.log("User Id ", id);
			const url = `https://warehouse-management-server-side-main.vercel.app/user/${id}`;
			fetch(url, {
				method: "DELETE"
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						const remaining = users.filter(user => user._id !== id);
						setUser(remaining);
					}
				})
		}

	} */

  return (
    <section>
      {/* End of the navbar  */}
      <div className='banner'>
        <div className='banner-container-info'>
          <article className='banner-info'>
            <h3>
              {' '}
              Bangladesh is a beautiful country. Various kinds of fruits grow in
              Bangladesh.
            </h3>
            <p>
              Among them, mango, orange, pineapple, banana, Lychee, coconut,
              lemons, pummel, guavas etc. are the main fruits of Bangladesh.
            </p>
          </article>
        </div>
      </div>
      {/* end of the banner sections  */}

      <Inventory></Inventory>
      {/* end of inventory section */}
      <Stocks></Stocks>
      <Review></Review>
      <Contact></Contact>

      {/* <h3> Total Users : {users.length} </h3>
			{
				users.map(user => <li
					key={user._id}
				> {user.name}  and  {user.email}
					<Link to={`/update/${user._id}`}><button> Update </button></Link>
					<button onClick={() => handledeleteUser(user._id)}>X</button>
				</li>)
			} */}
    </section>
  )
}

export default Home
