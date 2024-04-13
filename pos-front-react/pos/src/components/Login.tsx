import React,{useState} from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';

const Login:React.FC=()=>{


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const Login=()=>{
        console.log(email);
        console.log(password);
    }

    return (
    
        <>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="email" >Email</label>
                        <input type="text"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        className="form-control" placeholder="type your email" />
                    </div>
                </div>
                <div className="col-6">
                    
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className="form-control" placeholder="type your password" />
                    </div>
                </div>
                <div className="col-12">

                    <br/>
                    <button className="btn btn-primary col-12 " onClick={Login}>Log in</button>
                    <br/>
                    <br/>
                    <Link to="/signup" className="btn btn-outline-primary col-12">Sign up</Link>
                </div>

            </div>
        </div>
        </>




    )
}

export default Login;