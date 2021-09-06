import {CATEGORIES} from '../components/products/newProducts/CardData';
import {FISHES} from '../components/products/fishes/FishData';
import { SUBSTRATES } from '../components/products/substrates/SubstrateData';
import {PLANTS} from '../components/products/plants/PlantsData';
import {FOODS} from '../components/products/fish-foods/FoodsData';
export const initialState = {
    categories : CATEGORIES,
    fishes : FISHES,
    substrates : SUBSTRATES,
    plants : PLANTS,
    foods : FOODS,
    
}

export const Reducer = (state = initialState,action) =>{
    return state;
}