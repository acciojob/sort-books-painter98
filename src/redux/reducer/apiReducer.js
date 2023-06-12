import { API_FETCH_LOADING,API_FETCH_SUCCESS,API_FETCH_FAILURE } from "../actions/actionTypes";

//initial state
let initialState = {
    loading:false,
    data:[],
    error:''
}

//modification in state

let modify = (state=initialState,action) => {
    console.log('reducer',action.payload,state.data)

    switch(action.type){
        case API_FETCH_LOADING:
            console.log('reducer loading')
            return ({
                ...state,loading:true
            })
        case API_FETCH_SUCCESS:
            console.log('reducer',action.payload)
            return ({
                ...state,loading:false,data:action.payload
            })
        case API_FETCH_FAILURE:
            return ({
                ...state,loading:false,error:action.payload
            })
        default:
            return state
    }
}
export default modify;