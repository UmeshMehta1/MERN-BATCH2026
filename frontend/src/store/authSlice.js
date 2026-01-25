import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        data:[],              //useSelector to get data from store
        loading:"idle",
    },

    reducers:{
        setAuthenticated(state, action){
            state.isAuthenticated = action.payload;
        },
                  //useDispatch

        setData(state, action){
            state.data = action.payload;
        },

      setloading(state, action){
        state.loading = action.payload;
      }
    }
})

export const {setAuthenticated, setData, setloading} = authSlice.actions;

export default authSlice.reducer;