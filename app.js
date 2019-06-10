import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reduxthunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import reducers from './reducers';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Login from './components/admin/Login';

export default class App extends Component {
    render() {
		const store = createStore(reducers, {}, applyMiddleware(Reduxthunk));
        return (
			
			<Provider store={store}>
			<BrowserRouter>
            <div className="App"> 
			
			<Header />
			
					 <Switch>	 
					 <Route path="/" exact component={Home} /> 
					 <Route path="/blog" component={Blog} />
					 <Route path="/contact" component={Contact} />	
					 <Route path="/admin" component={Login} /> 
					 </Switch>
            </div>
			</BrowserRouter>
			</Provider>	
			
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
