import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import citylist from './reducers/citylist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


let store = createStore(citylist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Main />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);