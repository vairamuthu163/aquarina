import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import axios from 'axios';

export const fetchRecents = () =>(dispath)=>{
    dispath(recentsLoading(true));
    
    return axios.get('http://localhost:3001/categories') 
        .then((response)=> response.data)
        .then(response => dispath(addRecents(response)))
        .catch((error)=>dispath(recentsFailed(error)))
}

export const recentsLoading = () =>({
    type:ActionTypes.RECENT_LOADING
});
export const recentsFailed = () =>({
    type:ActionTypes.RECENT_FAILED
});

export const addRecents = (recents) => ({
    type:ActionTypes.ADD_RECENT,
    payload:recents
})
