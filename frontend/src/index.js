import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <Provider store={store}>
   <React.StrictMode>   
     <App />
     </React.StrictMode>
   </Provider>

);

