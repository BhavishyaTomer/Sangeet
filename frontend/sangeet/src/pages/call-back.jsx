import { Loader } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useUser } from '@clerk/clerk-react';  // Changed to useUser
import { axiosInstance } from '@/axios/axios';

const Callback = () => {
    const { isLoaded, user } = useUser();  // Use useUser instead of useClerk
    const navigate = useNavigate()
    const syncAttempted=useRef(false)

    useEffect(() => {
        const syncUser = async () => {
            try {
                if (!user || syncAttempted.current) {  // Only check for user
                    console.log("User not available yet")
                    return
                }

                console.log("Syncing user:", user.id,user.firstName,user.lastName,user.imageUrl)
                await axiosInstance.post("/api/auth", {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl
                })
             syncAttempted.current=true
            } catch (error) {
                console.error("Error syncing user:", error)
            } finally {
                navigate("/")
            }
        }

        syncUser()
    }, [user, navigate])  // Remove isLoaded from dependencies

    return (
        <div className='h-screen w-full justify-center flex items-center'>
            <Card className="w-[90%] max-w-md bg-zinc-800 border-zinc-800">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <Loader className='size-6 text-emerald-600 animate-spin' />
                    <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
                    <p className="text-zinc-400 text-sm">Redirecting...</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Callback;