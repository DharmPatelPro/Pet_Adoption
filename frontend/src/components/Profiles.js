import React, { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import profileContext from '../context/profiles/profileContext';


function Profiles() {
  const context = useContext(profileContext);
  const { Profiles, fetchAllUserProfiles, deleteProfile } = context;
 
  useEffect(() => {
    fetchAllUserProfiles();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <section >
        <div class="container  mx-auto">
          {/* <div>Profiles</div> */}
          <Link to="/ProfileForm"><button class="flex mx-auto mb-5 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Add New Pet Profile<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></button></Link>

          {Profiles.map((profile) => {
            return <div key={profile._id}>
              <div class="lg:w-4/5 mx-auto flex flex-wrap p-3 rounded-xl bg-gray-100">
                
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded-2xl" src={profile.image} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-xl title-font text-red-700 tracking-widest">{profile.tag}</h2>
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{profile.name}</h1>
                  <div class="flex mb-4">
                    <span class="flex items-center">
                      <span class="text-gray-900  text-xl">{profile.age} month old</span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <span class="text-gray-900 ml-3 text-xl">{profile.gender}</span>
                    </span>
                  </div>
                  <p class="text-gray-900 font-medium leading-relaxed">{profile.breed} {profile.tag}</p>

                  <div class="flex rounded-lg p-2 flex-col">
                    <div class="flex items-center ">
                      <h2 class="text-gray-900 text-lg title-font font-medium">About Pet :</h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-base">{profile.description}</p>
                    </div>
                  </div>
                  <p class="text-gray-900 font-medium leading-relaxed">Address : {profile.oneraddress}</p>
                  <div class="flex text-gray-900 font-medium items-center pb-5   mb-5">
                    <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {profile.location.city} , {profile.location.state}
                  </div>
                  <div class="flex">
                    <button onClick={() => { deleteProfile(profile._id) }} class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>Delete Profile</button>
                    <Link to={`/ProfileForm/${profile._id}`} class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>Edit Details</Link>
                  </div>
                </div>
              </div>
            </div>
          })}

        </div>
      </section>
    </>
  )
}

export default Profiles