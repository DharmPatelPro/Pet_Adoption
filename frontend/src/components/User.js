import React, { useEffect, useContext, useState } from 'react'
import userContext from '../context/user/userContext';

function User() {
  const context = useContext(userContext);
  const { fetchUser, UserDetails, updateuserDetails } = context;
  const [editButtonState, seteditButtonState] = useState({ showForm: false })
  const [credentials, setCredentials] = useState({ address: "", phone: "", name: "" })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateuserDetails(credentials.address, credentials.phone, credentials.name);
    seteditButtonState({ showForm: false })
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Welcome {UserDetails.name}</h1>
            <p class="leading-relaxed mt-4 text-gray-900">Your Email :{UserDetails.email}</p>
            <p class="leading-relaxed mt-4 text-gray-900">Your Address : {UserDetails.address}</p>
            <p class="leading-relaxed mt-4 text-gray-900">Your Phone : {UserDetails.phone}</p>
          </div>
          {!editButtonState.showForm && <button onClick={() => seteditButtonState({ showForm: true })} class="flex flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>Edit user details</button>}
          {editButtonState.showForm && <form onSubmit={handleSubmit} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Edit your credentials</h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Edit your name</label>
              <input onChange={onChange} value={credentials.name} type="text" name="name" id="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="number" class="leading-7 text-sm text-gray-600">Edit phone number</label>
              <input onChange={onChange} value={credentials.phone} type="number" id="number" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="address" class="leading-7 text-sm text-gray-600">Edit your address</label>
              <textarea onChange={onChange} value={credentials.address} id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

          </form>}
        </div>
      </section>
    </>
  )
}

export default User