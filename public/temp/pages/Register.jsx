import React from 'react';

import Add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Rita Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Already have an account? Login here</p>


            </div>
        </div>
    )
}

export default Register;