import { axiosInstance } from '@/axios/axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const useFetchSongs=()=>{
    const dispatch=useDispatch();
    const [sangeetMaterial, setSangeetMaterial] = useState({
        songs: [],
        albums: [],
      });
  
    useEffect(()=>{
        console.log("Effect called")
        const fetchSangeet=async ()=>{
            const [songsResponse, albumsResponse] = await Promise.all([
                axiosInstance.get('/api/sangeet/feature'), // API for songs
                // axiosInstance.get('/api/album'),  // API for albums
              ]);
        console.log(songsResponse)
        }
        fetchSangeet();
    },[])
}