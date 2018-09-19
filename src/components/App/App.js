import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import BlogPost from "../Blog/BlogPost/BlogPost";
import Media from '../Media/Media';
import './App.css';

const App = () => (
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
            <Route exact path="/blog" component={({ match }) => <Blog url={match.url}/>}/>
            <Route path="/blog/:postId" component={({ match }) => <BlogPost id={match.params.postId}/>}/>
            <Route path="/media" component={() => <Media />}/>
        </div>
    </Router>
);

export default App;
