import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Blog extends Component {
    render() {
        return(
            <div className="main-content">
                This is the Blog page. Select a post.
                <br />
                <Link to={`${this.props.match.url}/post-1`}>Post 1</Link>
                <br />
                <Link to={`${this.props.match.url}/post-2`}>Post 2</Link>
            </div>
        )
    }
}