import React, { useContext, useState, useEffect } from 'react';
import profileContext from '../context/profiles/profileContext';
import { useNavigate, useParams } from "react-router-dom";

const ProfileForm = () => {

    const { _id } = useParams();

    const navigate = useNavigate();
    const context = useContext(profileContext);
    const { addProfile, updateProfile } = context
    const [petCredentials, setPetCredentials] = useState({ id: "", name: "", tag: "", age: "", breed: "", gender: "male", description: "", city: "", state: "", image: "" })


    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setPetCredentials({ ...petCredentials, image: base64 });

    };
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onChange = (e) => {
        setPetCredentials({ ...petCredentials, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!petCredentials.id) {
            addProfile(petCredentials.name, petCredentials.tag, petCredentials.age, petCredentials.breed, petCredentials.gender, petCredentials.description, petCredentials.city, petCredentials.state, petCredentials.image)
            console.log(petCredentials.tag)
        }
        else {
            updateProfile(petCredentials.id, petCredentials.name, petCredentials.tag, petCredentials.age, petCredentials.breed, petCredentials.gender, petCredentials.description, petCredentials.city, petCredentials.state, petCredentials.image)
        }
        navigate('/dashboard')
    }



    const fetchProfileDetails = async () => {
        const response = await fetch(`http://localhost:5000/api/profile/fetchProfileDetails/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        var result = await response.json();
        result = { id: result._id, name: result.name, tag: result.tag, breed: result.breed, gender: result.gender, age: result.age, description: result.description, city: result.location.city, state: result.location.state, image: result.image }
        setPetCredentials(result)
    }

    useEffect(() => {
        if (_id) {
            fetchProfileDetails();
        }
        // eslint-disable-next-line
    }, [])



    return (
        <>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-3 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 ">
                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                    <div class="sm:col-span-4">
                                        <label for="pet name" class="block text-xl font-medium leading-6 text-gray-900">Pet's name</label>
                                        <div class="mt-2">
                                            <input type="text" name="name" onChange={onChange} defaultValue={petCredentials.name} autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="pet name" class="block text-xl font-medium leading-6 text-gray-900">Pet's type (Example : Dog, Cat)</label>
                                        <div class="mt-2">
                                            <input type="text" name="tag" onChange={onChange} defaultValue={petCredentials.tag} autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="pet name" class="block text-xl font-medium leading-6 text-gray-900"> Pet's age in months</label>
                                        <div class="mt-2">
                                            <input type="number" name="age" onChange={onChange} defaultValue={petCredentials.age} autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="pet name" class="block text-xl font-medium leading-6 text-gray-900">Pet's gender</label>
                                        <div class="mt-2">
                                            <select name="gender" onChange={onChange} autocomplete="gender" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="pet name" class="block text-xl font-medium leading-6 text-gray-900">Pet's breed</label>
                                        <div class="mt-2">
                                            <input type="text" name="breed" onChange={onChange} defaultValue={petCredentials.breed} autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="about" class="block text-xl font-medium leading-6 text-gray-900">About your pet</label>
                                        <div class="mt-2">
                                            <textarea name="description" onChange={onChange} defaultValue={petCredentials.description} rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"></textarea>
                                        </div>
                                        <p class="mt-3 text-xl leading-6 text-gray-600">Write a few sentences about your pet.</p>
                                    </div>

                                    <div class="sm:col-span-2 sm:col-start-1">
                                        <label for="city" class="block text-xl font-medium leading-6 text-gray-900">City / District</label>
                                        <div class="mt-2">
                                            <input type="text" name="city" onChange={onChange} defaultValue={petCredentials.city} id="city" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="state" class="block text-xl font-medium leading-6 text-gray-900">State / Province</label>
                                        <div class="mt-2">
                                            <input type="text" name="state" onChange={onChange} defaultValue={petCredentials.state} id="state" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" />
                                        </div>
                                    </div>


                                    <div class="col-span-full">
                                        <label for="cover-photo" class="block text-xl font-medium leading-6 text-gray-900">Cover photo</label>
                                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                {!petCredentials.image && <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                                </svg>}
                                                {petCredentials.image && <img class="h-40 rounded w-full object-cover object-center mb-6" src={petCredentials.image} alt="Pet's img" />}
                                                <div class="mt-4 flex text-xl leading-6 text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" type="file" accept=".jpg, .png|image/*" name="image" onChange={(e) => { uploadImage(e); }} class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="md:w-2/3  mx-auto">
                            <button type="submit" class="w-full bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                        </div>


                    </form>
                </div>
            </section>


        </>
    )
}

export default ProfileForm