import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { axiosInstance } from "@/axios/axios";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
const updateApiToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axiosInstance.defaults.headers.common['Authorization']
    }
}
const AuthProvider = ({children}) => {
    const { getToken, userId } = useAuth()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken()
                console.log("token is ",token)
                updateApiToken(token)
            } catch (error) {
                updateApiToken(null);
            }finally{
                setLoading(false)
            }
        }
        initAuth()
    }, [getToken])

    if(loading)
    {
        return(
            <div className="h-screen w-full justify-center flex items-center">
      <Loader  className="size-8 text-emerald-700 animate-spin" />
            </div>
        )
    }
    return <>{children}</>;
};
export default AuthProvider;