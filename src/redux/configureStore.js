import { createStore,combineReducers } from "redux";
import { Categories } from "./categories";
import { Filters } from "./filters";
import { Fishes } from "./fishes";
import { Foods } from "./foods";
import { Plants } from "./plants";
import { Substrates } from "./substrates";

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            categories : Categories,
            filters : Filters,
            fishes : Fishes,
            foods : Foods,
            plants : Plants,
            substrates : Substrates
        })
    );
    return store;
}