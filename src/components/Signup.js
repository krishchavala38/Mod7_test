import React,  { useEffect, useRef, useState } from 'react'
import Profile from './Profile';



const Signup = () => {
    const fullname=useRef()
    const email=useRef()
    const password=useRef()
    const confirm_password=useRef()
     const [showHome, setShowHome] = useState(false)
     const localSignUp=localStorage.getItem("signUp")

    useEffect(() => {
        if(localSignUp)
        setShowHome(true)
    },[localSignUp])

    const handleClick = () => {
        if(fullname.current.value && email.current.value && password.current.value)
        {
            localStorage.setItem("fullname",fullname.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Successfully signed up")
            window.location.reload()
        }
        else{
            alert("All fields are mandatory")
        }
    }

  return (
    <div>
      {showHome ? <Profile/> :
            
        
                <div>
                <div className="bg-black flex flex-row sm:flex-col text-white w-[full] h-[80px] border-b-indigo-500">

                    <div className="m-3 pl-[5%] lg:pr-[65%] text-[24px] Inter">
                        Home
                    </div>
                    <div className=" m-3 text-[24px] Inter">
                        Sign Up
                    </div>
                    <div className="m-3 text-[24px] Inter">
                        Profile
                    </div>
                
                </div>

               <div className="mt-0.5 bg-black flex flex-col text-white h-screen">
                    <div className="px-5 pt-5">
                        {/* <!-- component --> */}
                        <div className="bg-black flex flex-col">
                            <h2 className="pl-20 justify-start">Sign up</h2> 
                            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                                    <div className="bg-black px-6 py-8 rounded shadow-md text-white w-full">
                                        <input 
                                            type="text"
                                            className="bg-black border-b-2 border-white-200 w-[60%] p-3 rounded mb-4"
                                            name="fullname"
                                            placeholder="Full Name" ref={fullname} />

                                        <input 
                                            type="text"
                                            className="bg-black border-b-2 border-white-200 w-[60%] p-3 rounded mb-4"
                                            name="email"
                                            placeholder="Email" ref={email}/>

                                        <input 
                                            type="password"
                                            className="bg-black border-b-2 border-white-200 w-[60%] p-3 rounded mb-4"
                                            name="password"
                                            placeholder="Password" ref={password}/>
                                        <input 
                                            type="password"
                                            className="bg-black border-b-2 border-white-200 w-[60%] p-3 rounded mb-4"
                                            name="confirm_password"
                                            placeholder="Confirm Password" ref={confirm_password}/>
                                        <br />
                                        <button
                                            onClick={handleClick}
                                            type="submit"
                                            name="signup"
                                            className="bg-white w-[15%] text-center py-3 rounded bg-green text-black hover:bg-red  my-1"
                                             
                                            >Sign up</button>


                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
        }   
    </div>
  )
}

export default Signup