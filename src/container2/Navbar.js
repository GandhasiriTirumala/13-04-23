import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
 class Navbar extends Component {
 	render(){
 		return(
 			<div className='nav'>
	 			<Link to = '/' > Home < /Link>
	 			<Link to = '/todo' > ToDo </Link> 
		        <Link to = '/logout' > Logout </Link> 
 			</div>

 		)
 	}
 }
export default Navbar