import React, { Component } from 'react'
import app from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const auth=getAuth()

 class Login extends Component {

  state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })    
  }
  signIn=()=>{

  }
  register=()=>{
    createUserWithEmailAndPassword(auth,this.state.username,this.state.password) //passing two states into auth and this auth return a promise.so we use then
        .then((userCredentials)=>{
          console.log("created new user successfully",userCredentials)
        })
        .catch((err)=>{
          console.log(err)
        })      
  }
  signIn=()=>{
    createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
      .then((userCredentials)=>{
        console.log("logged in successfully",userCredentials)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  render() {
    return (
      <div className='page'>
       <p><input name="username" value={this.state.username} onChange={this.handleChange} placeholder='name'/></p>
        <p><input name="password" onChange={this.handleChange} value={this.state.password} /></p>
        <button onClick={this.signIn}> login</button>
        <p>
          <span>Don't have an account?</span>
          <button onClick={this.register}>SignUp</button>here
        </p>
      </div>
    )
  }
}
export default Login