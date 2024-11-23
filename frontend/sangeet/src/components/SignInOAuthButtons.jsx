import { useClerk } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const SignInOAuthButtons = () => {
    const clerk = useClerk()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      
        if (clerk?.client) {
            setIsReady(true)
            console.log('Clerk client ready:', {
                client: clerk.client,
                loaded: clerk.loaded,
                session: clerk.session
            })
        }
    }, [clerk?.client])

    const signInWithGoogle = async () => {
        try {
            // Use clerk.client instead of clerk.signIn
            await clerk.client.signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/call-back"
            })
        } catch (err) {
            console.error('Sign in error:', err)
        }
    }

    if (!isReady) {
        return <div>Loading...</div>
    }

    return (
        <>
          
            <Button 
                variant={'secondary'} 
                className="w-full text-white border-zinc-200 h-11" 
                onClick={signInWithGoogle}
            >
                Continue with google
            </Button>
        </>
    )
}

export default SignInOAuthButtons