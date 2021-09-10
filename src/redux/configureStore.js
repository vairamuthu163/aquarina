import { createStore,combineReducers,applyMiddleware } from "redux";
import { Categories } from "./categories";
import { Filters } from "./filters";
import { Fishes } from "./fishes";
import { Foods } from "./foods";
import { Plants } from "./plants";
import { RecentProducts } from "./recentProducts";
import { Substrates } from "./substrates";
import thunk from "redux-thunk";
import logger from "redux-logger";
export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            categories : Categories,
            filters : Filters,
            fishes : Fishes,
            foods : Foods,
            plants : Plants,
            substrates : Substrates,
            recentProducts : RecentProducts,
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}