import React from 'react'
import { Button } from "@/components/ui/button"
import { AuthenticateWithRedirectCallback, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Callback from './pages/call-back';
import MainLayout from './pages/MainLayout';
import ChatRoom from './pages/ChatRoom';
import { useFetchSongs } from './customhooks/fetchSongs';



const App = () => {
  return (
    <>
    {
      useFetchSongs()
      // console.log("hitting")
    }
  <Routes>

 <Route path='/sso-callback' element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={'/call-back'}/>} />
 <Route path='/call-back' element={<Callback/>}/>
 <Route element={<MainLayout/>} >
 <Route path='/chat' element={<ChatRoom/>} />
 <Route path='/' element={<Home/>} />


 </Route>

  </Routes>
  </>
  )
}

export default App