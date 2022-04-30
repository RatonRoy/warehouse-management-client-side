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
				<h3 className="question">
					When should I use nodejs ?
				</h3>
				<article>
					<p className="answer">
						I believe Node.js is best suited for real-time applications: online games, collaboration tools, chat rooms, or anything where what one user (or robot? or sensor?) does with the application needs to be seen by other users immediately, without a page refresh.

						I should also mention that Socket.IO in combination with Node.js will reduce your real-time latency even further than what is possible with long polling. Socket.IO will fall back to long polling as a worst case scenario, and instead use web sockets or even Flash if they are available.

						But I should also mention that just about any situation where the code might block due to threads can be better addressed with Node.js. Or any situation where you need the application to be event-driven.
					</p>
				</article>
			</div>
			{/* end of single question */}
			{/* start of single question */}
			<div className="single-question">
				<h3 className="question">
					when should I use mongodb?
				</h3>
				<article>
					<p className="answer">
					 In my opinion, NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
					</p>
				</article>
			</div>
			{/* end of single question */}
		</section>
	);
};

export default Blog;