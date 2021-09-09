import {FOODS} from '../components/products/fish-foods/FoodsData';

export const Foods = (state=FOODS,action) =>{
    switch(action.type){
        default:
            return state;
    }
}