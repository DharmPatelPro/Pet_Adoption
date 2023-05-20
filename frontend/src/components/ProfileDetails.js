import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function ProfileDetails() {

  const { _id } = useParams();
  const [Profile, setProfile] = useState([])

  const fetchProfileDetails = async () => {
    const response = await fetch(`http://localhost:5000/api/profile/fetchProfileDetails/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    var result = await response.json();
    result = { id: result._id, name: result.name, tag: result.tag, breed: result.breed, gender: result.gender, age: result.age, description: result.description, city: result.location.city, state: result.location.state, image: result.image, onername: result.contact.name, oneremail: result.contact.email, onerphone: result.contact.phone, oneraddress: result.contact.address }

    setProfile(result);

  }


  useEffect(() => {
    fetchProfileDetails();
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <section class="overflow-hidden">
        <div class="container px-5 py-8 mx-auto ">
          <div class="lg:w-4/5 mx-auto flex flex-wrap p-5 rounded-xl bg-gray-100 border-2  shadow-xl   border-gray-400 shadow-gray-600">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded-2xl shadow-2xl   shadow-gray-400" src={Profile.image} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-xl title-font text-red-700 tracking-widest">{Profile.tag}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{Profile.name}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <span class="text-gray-900  text-xl">{Profile.age} month old</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span class="text-gray-900 ml-3 text-xl">{Profile.gender}</span>
                </span>
              </div>
              <p class="text-gray-900 font-medium leading-relaxed">{Profile.breed} {Profile.tag}</p>
              <p class="text-gray-900 font-medium leading-relaxed">Owner Name : {Profile.onername}</p>
              <p class="text-gray-900 font-medium leading-relaxed">Owner Email Id : {Profile.oneremail}</p>
              <p class="text-gray-900 font-medium leading-relaxed">Owner Phone Number : {Profile.onerphone}</p>

              <div class="flex rounded-lg p-2 flex-col">
                <div class="flex items-center ">
                  <h2 class="text-gray-900 text-lg title-font font-medium">About Pet :</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">{Profile.description}</p>
                </div>
              </div>
              <p class="text-gray-900 font-medium leading-relaxed">Address : {Profile.oneraddress}</p>
              <div class="flex text-gray-900 font-medium items-center pb-5   mb-5">
                <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {Profile.city} , {Profile.state}
              </div>
              <div class="flex">
                <a href={`tel:${Profile.onerphone}`} class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded shadow-md shadow-gray-600"><svg class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg> Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileDetails