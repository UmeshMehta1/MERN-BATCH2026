import { createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../api";
import { use } from "react";



const STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        data:[],             
        loading: STATUS.IDLE,
        token:"",
        error:null
    },
    reducers:{
        setAuthenticated(state, action){
            state.isAuthenticated = action.payload;
        },

        setData(state, action){
            state.data = action.payload;
        },

      setLoading(state, action){
        state.loading = action.payload;
      },

      setError(state,action){
        state.error = action.payload;
      },

      setToken(state, action){
        state.token = action.payload;
      },


      logoutUser(state){
        state.isAuthenticated = false;
        state.data = [];
        state.token = "";
        localStorage.removeItem("token");
      }



    }
})


export const {setAuthenticated, setData, setLoading, setError, setToken} = authSlice.actions;

export default authSlice.reducer;

export function registerUser(userData){
    console.log("register called", userData);
    return async function registerUserThunk(dispatch){
        dispatch(setLoading(STATUS.LOADING));

     if(!userData.userEmail || !userData.userPassword || !userData.username){
        dispatch(setError("All fields are required"));
        dispatch(setLoading(STATUS.ERROR));
        alert("All fields are required");
        return;
     }

     try{
      
        const response = await apiClient.post("/users/register",userData)

         console.log("hello")

        console.log("Registration response:", response);

        if(response.status === 201){
            dispatch(setData(response.data))


            alert("Registration successful! Please login.");
        }else{
            dispatch (setError("Registration failed"));
            dispatch(setLoading(STATUS.ERROR));
        }
    }catch(error){
        dispatch(setError(error.response?.data?.message || "Something went wrong"));
        dispatch(setLoading(STATUS.ERROR));
    }
    }
}

//login user thunk
export function loginUser(userData){
    return async function loginUserThunk(dispatch){
        dispatch(setLoading(STATUS.LOADING));

     if(!userData.email || !userData.password){
        dispatch(setError("Email and Password are required"));
        dispatch(setLoading(STATUS.ERROR));
        return;
     }

     try{
        const response = await apiClient.post("/auth/login",userData)
        
        if(response.status === 201){
            alert("Login successful!");
            dispatch(setData(response.data.user))
            dispatch(setToken(response.data.token))
            dispatch(setAuthenticated(true))
            localStorage.setItem("token", response.data.token);
        }else{
            alert("Login failed! Please check your credentials.");
            dispatch (setError("Login failed"));
            dispatch(setLoading(STATUS.ERROR));
        }
    }catch(error){
        dispatch(setError(error.response?.data?.message || "Something went wrong"));
        dispatch(setLoading(STATUS.ERROR));
    }
    }   
}
