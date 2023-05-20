import React, { useEffect, useContext, useState } from 'react'
import userContext from '../context/user/userContext';
import User from './User'
import Profiles from './Profiles';

function Dashboard() {
  const context = useContext(userContext);
  const { fetchUser, UserDetails, createDonor } = context;

  const [credentials, setCredentials] = useState({ address: "", phone: "" })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createDonor(credentials.address, credentials.phone);
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      {(UserDetails.address && UserDetails.address) &&
        <div>
          <User />
          <Profiles />
        </div>
      }



      {!(UserDetails.address && UserDetails.address) &&
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} class="w-full max-w-sm">
            <div class="text-right text-gray-500 font-bold"> you are not donor, Plase submit your details...</div><br />
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Address
                </label>
              </div>
              <div class="md:w-2/3">
                <input type="text" value={credentials.address} onChange={onChange} name="address" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                  Phone No.
                </label>
              </div>
              <div class="md:w-2/3">
                <input type="number" value={credentials.phone} onChange={onChange} name="phone" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-full ">
                <button type="submit" class="w-full bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
              </div>
            </div>
          </form>
        </div>
      }

    </>
  )
}

export default Dashboard