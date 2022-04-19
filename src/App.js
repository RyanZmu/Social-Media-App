import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Form, Overlay, Popover } from 'react-bootstrap'
import LandingPage from './Components/SplashPage'
import UserProfile from './Components/UserProfile'
import UserLoginPage from './Components/LoginPage'
import NavigatonBar from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import profileWoman from './images/userImages/profile-woman.jpg'
import profileMan1 from './images/userImages/profile-man1.jpg'
import profileMan2 from './images/userImages/profile-man2.jpg'
import profileMan3 from './images/userImages/profile-man3.jpg'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import { Tooltip, Alert } from 'bootstrap'

function App () {
  function generateId () {
    return Math.floor((1 + Math.random()) * 1000)
  }

  const [usersState, setUser] = useState({
    userList: [
      {
        id: generateId(),
        isOnline: false,
        firstName: 'Charles',
        lastName: 'Zoidberg',
        userName: 'soccerfan1',
        password: 'password1',
        interests: 'soccer,movies,games',
        hobbies: 'video games,biking,sailing',
        favoriteShows: 'Will & Grace, Rick and Morty, Hawaii Five-0',
        status: 'Taking the dog for a walk!',
        image: profileMan1
      },
      {
        id: generateId(),
        isOnline: true,
        firstName: 'Nick',
        lastName: 'Thompson',
        userName: 'guccimaner',
        password: 'guccifan1',
        interests: 'rap,gym,women',
        hobbies: 'shopping,driving fast cars,being a chad',
        favoriteShows: 'Nitro Circus, Jackass, Ridiculousness',
        status: 'Watching the X-Games',
        image: profileMan2
      },
      {
        id: generateId(),
        isOnline: false,
        firstName: 'Florence',
        lastName: 'Smith',
        userName: 'fancypants92',
        password: 'louisvutton1',
        interests: 'money,luxury,fine dining',
        hobbies: 'watch fitting,suit tailoring,arguing over the pronunciation of escargot',
        favoriteShows: 'Luxury Ads,Cribs,Sex and the City',
        status: 'Shopping for a Rolex!',
        image: profileMan3
      },
      {
        id: generateId(),
        isOnline: true,
        firstName: 'Kelly',
        lastName: 'Roe',
        userName: 'kelly92',
        password: 'raptorsfan1',
        interests: 'sports,shopping,travel',
        hobbies: 'going on cruises,hiking,learning new cultures',
        favoriteShows: 'Parts Unknown,SportsCenter,Mad Money',
        status: 'Hoping to get this job promotion!',
        image: profileWoman
      }
    ]
  })

  console.log(usersState)

  const [activeUser, activeUserState] = useState({})

  function isActiveUser (userRequested) {
    // userRequested= {userName:'soccerfan1',password:'password1'}
    console.log(userRequested)
    usersState.userList.filter(user => {
      if (userRequested.userName === user.userName && userRequested.password === user.password) {
        user.isOnline = 'true'
        activeUserState(user)
      }
    })
  }

  // have this be called when a user opens up profile page and when user completes sign in page - hard code for testing

  console.log({ activeUser })

  return (
    <div className='App'>
      <NavigatonBar userId={activeUser.id} />
      {/* we pass activeUser id to our nav bar so it can change url dynamically */}

      <Routes>
        <Route
          path={activeUser === undefined ? '/sign-in' : '/profile/' + activeUser.id}
          element={<UserProfile user={activeUser} userList={usersState.userList} />}
        />
        <Route
          path='/sign-in'
          element={<UserLoginPage activeUserCheck={isActiveUser} activeUser={activeUser} />}
        />
        <Route
          path='/'
          element={<LandingPage />}
        />
      </Routes>

    </div>
  )
}

export default App
