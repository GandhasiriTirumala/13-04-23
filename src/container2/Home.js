import {useState,useEffect} from  'react'
import {db} from './firebaseConfig'
function Home(){
	const [list,setList]=useState([])
	 useEffect(()=>{
	 	retrieve()
	 },[])
	 async function retrieve(){
	 	console.log("from home using useeffect")
	 	const dataRef=db.collection("time").orderBy("date","asc")
	 	const snapShot=await dataRef.get()
	 	console.log("snap data",snapShot)
	 	setList(snapShot.docs.map((doc)=>(
	 	{
	 		date:doc.data().date.toDate().toDateString(),
	 		message:doc.data().todoMsg
	 	}
	 )))
	}
	 return(
	 		<div>
			{console.log(list)}
	 			{
	 				list.map((e)=>(
	 					<div key={e.Message}>
	 						<p>{e.message}</p>
	 						<p>{e.date}</p>
	 					</div>
	 					))
	 			}
	 		</div>
	 	)
}

export default Home

//import React, {Component} from 'react'
// import app from './firebaseConfig'
// import {db} from './firebaseConfig'

// //import {getAuth,signOut} from 'firebase/auth'

// //const auth=getAuth()

// class Home extends Component {
// 	logout=()=>{
// 		signOut(auth)
// 		.then(()=>console.log("signed out successfully"))
// 		.catch((err)=>console.log(err))
// 	}
// 	state={
// 		details:[]
// 	}
// 	ComponentDidMount(){
// 		const dataRef=db.collection("time").orderBy("date","asc")
// 		const 
// 	}
// 	render(){
// 		return(
// 			<div>
// 				your logged successfully
// /*				<button onClick={this.logout}>LogOut</button>
// */			</div>
// 		)
// 	}
// }
