import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function UserDetails() {
    const details = useParams();
    const navigate  = useNavigate();
    const goBackHandler=()=>{
        navigate("/user");
    }
   
  return (
    <>
    <h2 className='ml-6 text-2xl'>Hi there {details.id}</h2>
    <button onClick={goBackHandler} className='m-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Go back</button>
    </>
    
  )
}

export default UserDetails