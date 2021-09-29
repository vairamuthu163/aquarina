import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './MainComponent'
import { ConfigureStore } from "./redux/configureStore";
import { CssBaseline } from '@material-ui/core';
const store = ConfigureStore();
function App() {
    return (
        <BrowserRouter> 
           <Provider store={store}> 
                <CssBaseline /> 
                <MainComponent />
            </Provider>
        </BrowserRouter>
    )
}

export default App
