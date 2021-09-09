import {FILTERS} from '../components/products/filters/FilterData';

export const Filters = (state=FILTERS,action) =>{
    switch(action.type){
        default:
            return state;
    }
}