import logo from './logo.svg';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SplashPage from './Components/SplashPage';
import UserProfile from './Components/UserProfile';
import UserLoginPage from './Components/LoginPage';
import NavigatonBar from './Components/Navigation';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileWoman from './images/userImages/profile-woman.jpg'
import profileMan1 from './images/userImages/profile-man1.jpg'
import profileMan2 from './images/userImages/profile-man2.jpg'
import profileMan3 from './images/userImages/profile-man3.jpg'



function App() {

  function generateId () {
    return Math.floor((1 + Math.random()) * 1000)
  }


  const [usersState,setUser] = useState({
    userList: [
      {
        id: generateId(),
        active: false,
        firstName: 'Charles',
        lastName: 'Zoidberg',
        userName: 'soccerfan1',
        password: 'password1',
        interests: 'soccer,movies,games',
        hobbies: 'video games,biking,sailing',
        favoriteShows: 'Will & Grace, Rick and Morty, Hawaii 5-0',
        image: profileMan1
      },
      {
        id: generateId(),
        active: true,
        firstName: 'Nick',
        lastName: 'Thompson',
        userName: 'guccimaner',
        password: 'guccifan1',
        interests: 'rap,gym,women',
        hobbies: 'shopping,driving fast cars,being a chad',
        favoriteShows: 'Nitro Circus, Jackass, Ridiculousness',
        image: profileMan2
      },
      {
        id: generateId(),
        active: false,
        firstName: 'Florence',
        lastName: 'Smith',
        userName: 'fancypants92',
        password: 'louisvutton1',
        interests: 'money,luxury,fine dining',
        hobbies: 'watch fitting,suit tailoring,arguing over the pronunciation of escargot',
        favoriteShows: 'Luxury Ads,Cribs,Sex and the City',
        image: profileMan3
      },
      {
        id: generateId(),
        active: true,
        firstName: 'Kelly',
        lastName: 'Roe',
        userName: 'kelly92',
        password: 'raptorsfan1',
        interests: 'sports,shopping,travel',
        hobbies: 'going on cruises,hiking,learning new cultures',
        favoriteShows: 'Parts Unknown,SportsCenter,Mad Money',
        image: profileWoman
      },
    ]
  })

  console.log(usersState);

  
  return (
    <div className="App">
    <NavigatonBar/>



    <Routes>
  <Route
  path='/profile/:userId'
  element={<UserProfile user='' />}
  />
  <Route 
  path='/sign-in'
  element={<UserLoginPage/>}
  />
  <Route
  path='/'
  element={<SplashPage />}
  />
</Routes>

    </div>
  );
}



export default App;
