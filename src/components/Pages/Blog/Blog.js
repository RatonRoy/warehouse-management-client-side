import React from 'react';
import './Blog.css';

const Blog = () => {
	return (
		<section className='section-center'>
			{/* start of single question */}
			<div className="single-question">
				<h3 className="question">
					What are the Difference between javascript and nodejs?
				</h3>
				<article>
					<table>
						<caption> Difference between javascript and nodejs</caption>
						<tr>
							<th>Category </th>
							<th> Javascript</th>
							<th>Node JS </th>
						</tr>
						<tr>
							<td>Definition</td>
							<td> It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.</td>
							<td>
								It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.
							</td>
						</tr>
						<tr>
							<td>Type</td>
							<td>
								It is a programming language. It works in any browser that has a proper browser engine.
							</td>
							<td>
								It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.
							</td>
						</tr>
						<tr>
							<td>Dedicated Server </td>
							<td>
								It is generally used on the client-side server.
							</td>
							<td>
								It is generally used on the server side.
							</td>

						</tr>
						<tr>
							<td>Running Engines</td>
							<td>
								JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.
							</td>
							<td>
								Node JS is only supported by the V8 engine, which Google Chrome mostly uses. Any JavaScript program written with Node JS will always be run in the V8 engine.
							</td>
						</tr>
						<tr>
							<td>Companies Uses</td>
							<td>
								Various companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc.
							</td>
							<td>
								Various companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc.
							</td>
						</tr>
					</table>
				</article>
			</div>
			{/* end of  single question */}
			{/* start of single question */}
			<div className="single-question">
				<h3 className="question">
					What are the  Differences between sql and nosql databases?
				</h3>
				<table>
					<caption>
						Differences between sql and nosql databases.
					</caption>
					<tr>
						<th>SQL</th>
						<th>NOSQL</th>
					</tr>
					<tr>

						<td>
							RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
						</td>
						<td>
							Non-relational or distributed database system.
						</td>

					</tr>
					<tr>
						<td>
						These databases have fixed or static or predefined schema
						</td>
						<td>
						   They have dynamic schema
						</td>
					</tr>
					<tr>
						<td>
						These databases are not suited for hierarchical data storage.
						</td>
						<td>
						These databases are best suited for hierarchical data storage.
						</td>
					</tr>
					<tr>
						<td>
						Vertically Scalable
						</td>
						<td>
						Horizontally scalable
						</td>
					</tr>
					<tr>
						<td>
							Follows ACID property
						</td>
						<td>
						Follows CAP(consistency, availability, partition tolerance)
						</td>
					</tr>
				</table>
			</div>
			{/* end of single question */}
			{/* start of single question */}
			<div className="single-question">

			</div>
			{/* end of single question */}
			{/* start of single question */}
			<div className="single-question">

			</div>
			{/* end of single question */}
		</section>
	);
};

export default Blog;