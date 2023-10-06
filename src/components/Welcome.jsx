import React, {useState, useEffect} from 'react'

function Welcome({handleLogOut}) {

  return (
    <>
    <h1>Welcome</h1>
    <button type="buttton" onClick={handleLogOut}  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Logout</button>


    </>
  )
}

export default Welcome
