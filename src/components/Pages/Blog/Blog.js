import React from 'react';
import './Blog.css';

const Blog = () => {
	return (
		<section className='section-center'>
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
		</section>
	);
};

export default Blog;