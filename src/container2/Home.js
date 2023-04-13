import React, {Component} from 'react'
import app from './firebaseConfig'
import {getAuth,signOut} from 'firebase/auth'

const auth=getAuth()

class Home extends Component {
	/*logout=()=>{
		signOut(auth)
		.then(()=>console.log("signed out successfully"))
		.catch((err)=>console.log(err))
	}*/
	render(){
		return(
			<div>
				your logged successfully
/*				<button onClick={this.logout}>LogOut</button>
*/			</div>
		)
	}
}
export default Home