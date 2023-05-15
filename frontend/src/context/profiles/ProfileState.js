import ProfileContext from "./profileContext";
import { useState } from "react";

const ProfileState = (props) => {

  const [Profiles, setProfiles] = useState([])

  const fetchAllProfiles = async () => {
    const response = await fetch("http://localhost:5000/api/profile/fetchallprofiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const result = await response.json();
    setProfiles(result);
  }

  const addProfile = async (name, tag,age, breed, gender, description, city, state, image) => {
    console.log(name, tag,age, breed, gender, description, city, state)
    const response = await fetch(`http://localhost:5000/api/profile/addpet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, tag,age, breed, gender, description, city, state, image })
    });
    const result = await response.json();
    console.log(result)
    fetchAllProfiles()
  }

  const deleteProfile = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/profile/deleteprofile/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const result = response.json();
    console.log(result)
    fetchAllProfiles()
  }

  const updateProfile = async (id,name, tag,age, breed, gender, description, city, state, image) =>{
    console.log(id,name, tag,age, breed, gender, description, city, state)
    const response = await fetch(`http://localhost:5000/api/profile/updateprofile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, tag,age, breed, gender, description, city, state, image })
    });
    const result = await response.json();
    fetchAllProfiles()
  }

  return (
    <ProfileContext.Provider value={{ Profiles, fetchAllProfiles, addProfile,deleteProfile,updateProfile }}>
      {props.children}
    </ProfileContext.Provider>
  )

}
export default ProfileState;