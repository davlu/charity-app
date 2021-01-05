import React from 'react';
import axios from "axios";
import { useEffect, useReducer } from 'react';

/**base url request */
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=b3da2cdc43218d346378331b3b6f2f33&searchTerm=";

const Actions = {
    MAKE_REQUEST : 'make-request',
    GET_DATA : 'get-data',
    ERROR : 'error'
}

function reducer(state, action){    //state is current state. action comes from useEffect(). depends on axios.get().
    switch(action.type){
        case Actions.MAKE_REQUEST || Actions.ERROR:
            return {loading : true, charities: []}  //loading right now, we have no charities
        case Actions.GET_DATA:
            return {...state, loading: false, charities: action.payload.charities}  //take everything in original, charities filled
        default:
            return state;
    }
    
}
function formatString(str) {
    return str
    .replace(/(\B)[^ ]*/g,match =>(match.toLowerCase()))
    .replace(/^[^ ]/g,match=>(match.toUpperCase()));
  }

  
function useFetchEvents(params){
    const [state, dispatch] = useReducer(reducer, {charities: [], loading: true, error: false});   
    //dispatch uses our reducer function to setState with corresponding "action"
    const cancelToken = axios.CancelToken.source();
    console.log(BASE_URL.concat(params.description))
    useEffect(() => {
        dispatch({type: Actions.MAKE_REQUEST})  //update loading state to true
        axios.get(BASE_URL.concat(params.description), {
            cancelToken : cancelToken.token
        }).then(res => {
            dispatch({type: Actions.GET_DATA, payload : { charities: res.data.data}})
        }).catch(e => {
            //if(axios.isCancel(e)) return;
            dispatch({type: Actions.ERROR, payload: {error: e}})
        })
        return () => {
            cancelToken.cancel();
        }
    }, [params])  //everytime we change our params. like the search query.
    return state; //return the reduced state
}

export default useFetchEvents


/*
params:
    searchTerm
    city
    state
*/