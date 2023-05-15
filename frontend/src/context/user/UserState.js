import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const [UserDetails, setUserDetails] = useState([])



  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/api/user/fetchuserdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const result = await response.json();
    setUserDetails(result);
  }


  const createDonor = async (address, phone) => {
    const response = await fetch(`http://localhost:5000/api/user/createdonor`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ address, phone })
    });
    const result = await response.json();
    console.log(result)
    fetchUser()
  }
  

  const updateuserDetails = async (address, phone, name) => {
    const response = await fetch(`http://localhost:5000/api/user/updateuserdetails`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ address, phone, name })
    });
    const result = await response.json();
    console.log(result)
    fetchUser()
  }


  return (
    <UserContext.Provider value={{ UserDetails, fetchUser, createDonor, updateuserDetails }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserState;