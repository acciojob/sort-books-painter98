import { API_FETCH_LOADING,API_FETCH_SUCCESS,API_FETCH_FAILURE } from "./actionTypes";
import axios from 'axios';

//loading action function
export const apiRequest = () => ({
        type:API_FETCH_LOADING
})

//success action function
export const apiSuccess = (data) => {
    console.log('apisuccess',data)
    return ({
        type:API_FETCH_SUCCESS,
        payload:data
    })
}

//failure action function
export const apiFailure = (error) => {
    return ({
        type:API_FETCH_FAILURE,
        payload:error
    })
}

export const fetchApi = () => {
    console.log('inside fetchApi');

    return (dispatch)=>{

        dispatch(apiRequest());

        console.log('loading done')

        axios.get('https://www.dbooks.org/api/recent')
        .then(response=>{
            console.log(response.data.books)
            dispatch(apiSuccess(response.data.books))
        }) //successful retreival of data
        .catch(error=>dispatch(apiFailure(error))) //data obtaining failed
    }
}