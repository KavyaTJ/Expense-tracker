import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate= useNavigate()

  const handleNavigation = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('nannnnnn');
    
    navigate('/dashboard'); // add the '/' to make sure you're navigating to the right path
  };
  return (
    <div className='flex justify-center items-center h-screen bg-[#16325B]'>
<div className="relative bg-[#FF0080] px-6 pt-4 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-1/3 h-[400px]">
<label htmlFor="email" className="block mb-4 mt-2 text-3xl text-center font-medium text-gray-900 dark:text-white">Login</label>
<form className="max-w-sm mx-auto" onSubmit={handleNavigation}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#071952]-500 focus:border-[#071952]-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-[#071952]-500 dark:focus:border-[#071952]-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className="flex justify-center">
  <button type="submit" className="text-white bg-[#16325B] hover:bg-[#0F1A2B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 mx-auto my-2 px-5 py-2.5 text-center dark:bg-[#0F1A2B]-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Submit
</button></div>
</form>

</div></div>
  )
}

export default Login