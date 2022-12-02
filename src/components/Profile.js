import React from 'react';

const Profile = () => {
    const logout =() => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount =() => {
        localStorage.clear()
        window.location.reload()
    }
   let userName = localStorage.getItem('fullname')
   let userEmail = localStorage.getItem('email')
   let userPassword = localStorage.getItem('password')

  return (
    <>
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

        <div className="mt-0.5 bg-black text-white h-screen w-full">
            <div >
                <center>
                <h2 className='p-10'> Profile </h2>
                <h3>Full Name: {userName}</h3>
                <h3>Email    : {userEmail}</h3>
                <h3>Password : {userPassword}</h3>
                <br />
                <button onClick={logout} className='bg-primary p-3 border-white rounded-lg font-mdeium mr-2'> Logout </button>
                <button onClick={deleteAccount} className='bg-primary p-3 border-white rounded-lg font-medium ml-2'> Delete </button>
                </center>
            </div>
        </div>
    </>
  )
}

export default Profile