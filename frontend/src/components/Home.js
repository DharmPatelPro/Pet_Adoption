import React, { useEffect,useContext, useState } from 'react';
import { Link } from "react-router-dom";
import profileContext from '../context/profiles/profileContext';

function Home() {

  const context = useContext(profileContext);
  const { AllProfiles, fetchAll } = context;
  
  

  useEffect(() => {
    fetchAll();
    
    // eslint-disable-next-line
  }, [])

  return (
    <>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">

          <div class="flex flex-wrap ">
            {AllProfiles.map((profile) => {
              return <div key={profile._id} class="xl:w-1/4 md:w-1/2 p-4s my-5">
                <Link to={`/${profile._id}`}>
                  <div class="bg-gray-100 p-6 rounded-lg mx-3 border-2  shadow-xl border-gray-400 shadow-gray-600 ">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={profile.image} alt="Pet's img" />
                    <h3 class="tracking-widest text-red-700 text-base font-medium title-font">{profile.tag}</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font ">{profile.name}</h2>
                    <h3 class="text-lg text-gray-900 font-medium title-font mb-1">{profile.age} month old</h3>
                    <p class="leading-relaxed text-base flex">
                      <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>{profile.location.city} , {profile.location.state}
                    </p>

                    <Link to={`/${profile._id}`}>
                      <div class="text-blue-800 hover:text-sky-400">View mor Details...</div>
                    </Link>
                  </div>
                </Link>
              </div>
            })}

          </div>

        </div>
      </section>

    </>
  )
}

export default Home
























          // <div>
          //   {Profiles.map((profile) => {
          //     return <div key={profile._id}>
          //       <div> Name : {profile.name} </div>
          //       <div> Type : {profile.tag} </div>
          //       <div> {profile.age} months old </div>
          //       <div> Gender  : {profile.gender} </div>
          //       <div> Breed : {profile.breed} </div>
          //       <div> Description: {profile.description} </div>
          //       <div>  {profile.location.city} ,{profile.location.state}</div>
          //       <div> Owner Name : {profile.contact.name} </div>
          //       <div> Address : {profile.contact.address} </div>
          //       <div> Email : {profile.contact.email} </div>
          //       <div> Phone Number : {profile.contact.phone} </div>
          //       <img width="200" height="200" src={profile.image} alt="Pet's img" />
          //       <br /><br />
          //     </div>
          //   })}
          // </div>