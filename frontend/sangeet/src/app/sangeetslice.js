import { createSlice } from "@reduxjs/toolkit";

const SangeetSlice = createSlice({
    name: "job",
    initialState: {
        allSongs: [],
        filteredSongs: [],
        albums: [],
        filteredSongs:[]
    },
    reducers: {
        getSongs:(state,action)=>{
            state.allSongs=action.payload;
        }
    }})

export default SangeetSlice.reducer

