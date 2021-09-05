/* import {CATEGORIES} from './components/products/newProducts/CardData';
import {FISHES} from './components/products/fishes/FishData'; */
import {CATEGORIES} from '../components/products/newProducts/CardData';
import {FISHES} from '../components/products/fishes/FishData';
export const initialState = {
    categories : CATEGORIES,
    fishes : FISHES
}

export const Reducer = (state = initialState,action) =>{
    return state;
}