import * as ActionTypes from './ActionTypes'; 
import axios from 'axios';


//Fetch the Recent Products
export const fetchRecents = () =>(dispatch)=>{
    dispatch(recentsLoading(true));

    return axios.get('http://localhost:3001/categories') 
        .then((response)=> response.data)
        .then(response => dispatch(addRecents(response)))
        .catch((error)=>dispatch(recentsFailed(error)))
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
});


//Fetch the Fishes
export const fetchFishes = () =>(dispatch)=>{
    dispatch(fishesLoading(true));

    return axios.get('http://localhost:3001/fishes') 
        .then((response)=> response.data)
        .then(response => dispatch(addFishes(response)))
        .catch((error)=>dispatch(fishesFailed(error)))
}

export const fishesLoading = () =>({
    type:ActionTypes.FISHES_LOADING
});

export const fishesFailed = () =>({
    type:ActionTypes.FISHES_FAILED
});

export const addFishes = (fishes) => ({
    type:ActionTypes.ADD_FISHES,
    payload:fishes
});


//Fetch the Plants
export const fetchPlants = () =>(dispatch)=>{
    dispatch(plantsLoading(true));

    return axios.get('http://localhost:3001/plants') 
        .then((response)=> response.data)
        .then(response => dispatch(addPlants(response)))
        .catch((error)=>dispatch(plantsFailed(error)))
}

export const plantsLoading = () =>({
    type:ActionTypes.PLANTS_LOADING
});

export const plantsFailed = () =>({
    type:ActionTypes.PLANTS_FAILED
});

export const addPlants = (plants) => ({
    type:ActionTypes.ADD_PLANTS,
    payload:plants
});

//Fetch the Substrates
export const fetchSubstrates = () =>(dispatch)=>{
    dispatch(substratesLoading(true));

    return axios.get('http://localhost:3001/substrates') 
        .then((response)=> response.data)
        .then(response => dispatch(addSubstrates(response)))
        .catch((error)=>dispatch(substratesFailed(error)))
}

export const substratesLoading = () =>({
    type:ActionTypes.SUBSTRATES_LOADING
});

export const substratesFailed = () =>({
    type:ActionTypes.SUBSTRATES_FAILED
});

export const addSubstrates = (substrates) => ({
    type:ActionTypes.ADD_SUBSTRATES,
    payload:substrates
});


//Fetch the Fish-Foods
export const fetchFoods = () =>(dispatch)=>{
    dispatch(foodsLoading(true));

    return axios.get('http://localhost:3001/fishfoods') 
        .then((response)=> response.data)
        .then(response => dispatch(addFoods(response)))
        .catch((error)=>dispatch(foodsFailed(error)))
}

export const foodsLoading = () =>({
    type:ActionTypes.FOODS_LOADING
});

export const foodsFailed = () =>({
    type:ActionTypes.FOODS_FAILED
});

export const addFoods = (foods) => ({
    type:ActionTypes.ADD_FOODS,
    payload:foods
});

//Fetch the Accessories or filters
export const fetchFilters = () =>(dispatch)=>{
    dispatch(filtersLoading(true));

    return axios.get('http://localhost:3001/filters') 
        .then((response)=> response.data)
        .then(response => dispatch(addFilters(response)))
        .catch((error)=>dispatch(filtersFailed(error)))
}

export const filtersLoading = () =>({
    type:ActionTypes.FILTERS_LOADING
});

export const filtersFailed = () =>({
    type:ActionTypes.FILTERS_FAILED
});

export const addFilters = (filters) => ({
    type:ActionTypes.ADD_FILTERS,
    payload:filters
});