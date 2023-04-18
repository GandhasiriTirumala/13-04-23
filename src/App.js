//import MessageList from "./components/MessageList"
/*import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import Signup from './container/Signup'
import Contact from './container/Contact'
import Navbar from './Navbar'
export default function App() {
    return ( 
    <div >
        <BrowserRouter >
            <Navbar / >
            <Routes >
                <Route path = "/"elememt = { < Home / > }/>
                 <Route path = "/about"element = { < About / > } />
                  <Route path = "/contact"element = { Contact / > }/>
                   <Route path = "/signup"element = { < Signup / > }/> 
                   < Route path = "*"element = { < NotFound / > } 
               </Routes> 
           < /BrowserRouter >
           </div>
    )
}

function NotFound() {
    return ( <
        div > file not found < /div>
    )
}

// export default function App() {
//     return ( <
//         div >
//         <
//         p > Hello < /p> <
//         MessageList / >
//         <
//         /div>
//     )
// }*/
import React,{Component} from 'react'
import Home from './container2/Home'
import Login from './container2/Login'
import app from './container2/firebaseConfig'
import{getAuth,onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToDo from './container2/ToDo'
import Logout from './container2/Logout'
import Navbar from './container2/Navbar'
import NotFound from './container2/Notfound'
import './App.css'
const auth=getAuth()

class App extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        onAuthStateChanged(auth,(user)=>{
            if(user){
                this.setState({user:user})
            }
            else{
                this.setState({user:null})
            }
        })
    }
    render() {
        console.log("user details",this.state.user)
        return(
            <div>
                {this.state.user?(
                        <BrowserRouter>
                            <Navbar/>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/todo" element={<ToDo/>}/>
                                    <Route path="/logout" element={<Logout/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                                </Routes>
                        </BrowserRouter>
                    ):<Login/>
                }
            </div>
        )
    }
}
export default App