import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import UserState from './context/user/UserState';
import ProfileState from './context/profiles/ProfileState';
import ProfileForm from './components/ProfileForm';
import Signup from './components/Signup';
import ProfileDetails from './components/ProfileDetails'
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
    <ProfileState>
      <UserState>
        
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/ProfileForm' element={<ProfileForm />} />
              <Route exact path='/aboutus' element={<Aboutus />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route path="/:_id" element={<ProfileDetails />} />
              <Route path="/ProfileForm/:_id" element={<ProfileForm />} />
            </Routes>
          </BrowserRouter>
        
      </UserState>
      </ProfileState>
    </>
  )
}

export default App