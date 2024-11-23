import React from 'react'
import { Button } from "@/components/ui/button"
import { AuthenticateWithRedirectCallback, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Callback from './pages/call-back';



const App = () => {
  return (
  <Routes>
 <Route path='' element={<Home/>} />
 <Route path='/sso-callback' element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={'/call-back'}/>} />
 <Route path='/call-back' element={<Callback/>}/>

  </Routes>
  )
}

export default App