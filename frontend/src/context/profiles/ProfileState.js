import ProfileContext from "./profileContext";
import { useState } from "react";

const ProfileState = (props) => {

  const [Profiles, setProfiles] = useState([])

  const [AllProfiles, setAllProfiles] = useState([])

 

  const fetchAll = async () => {
    const response = await fetch("http://localhost:5000/api/profile/fetchall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const result = await response.json();
    setAllProfiles(result);
  }


  


  const fetchAllUserProfiles = async () => {
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

  const addProfile = async (name, tag, age, breed, gender, description, city, state, image) => {
    console.log(name, tag, age, breed, gender, description, city, state)
    const response = await fetch(`http://localhost:5000/api/profile/addpet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, tag, age, breed, gender, description, city, state, image })
    });
    const result = await response.json();
    console.log(result)
    fetchAllUserProfiles()
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
    fetchAllUserProfiles()
  }

  const updateProfile = async (id, name, tag, age, breed, gender, description, city, state, image) => {
    console.log(id, name, tag, age, breed, gender, description, city, state)
    const response = await fetch(`http://localhost:5000/api/profile/updateprofile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, tag, age, breed, gender, description, city, state, image })
    });
    const result = await response.json();
    if(result.success === true){alert("Edit Success");}
    fetchAllUserProfiles()
  }

  return (
    <ProfileContext.Provider value={{ Profiles, AllProfiles, fetchAll, fetchAllUserProfiles, addProfile, deleteProfile, updateProfile }}>
      {props.children}
    </ProfileContext.Provider>
  )

}
export default ProfileState;