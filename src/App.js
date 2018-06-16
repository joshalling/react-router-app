import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from './Home';
import {Blog} from './Blog';
import {Media} from './Media';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">React Router App</h1>
                        <ul className="main-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                        </ul>
                    </header>

                    <Route exact path="/" component={() => <Home />}/>
                    <Route path="/blog" component={() => <Blog />}/>
                    <Route path="/media" component={() => <Media />}/>
                </div>
            </Router>
        );
    }
}

export default App;
