import * as api from '../api'

export const fetchAllUsers = () => async (dispatch) => {
    try{
        const {data} = await api.fetchAllUsers();
        dispatch({type: "FETCH_USERS", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const updataProfile = (id,updateData) => async (dispatch) =>{
    try{
        const {data} = await api.updateProfile(id,updateData);
        dispatch({type: "UPDATE_PROFILE", payload:data})
        
    }catch(error){
        console.log(error)
    }
}

