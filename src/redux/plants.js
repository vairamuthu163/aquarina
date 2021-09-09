import {PLANTS} from '../components/products/plants/PlantsData';

export const Plants = (state=PLANTS,action) =>{
    switch(action.type){
        default:
            return state;
    }
}