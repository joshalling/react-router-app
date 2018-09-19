import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Blog = ({ url }) => (
    <div className="main-content">
        This is the Blog page. Select a post.
        <br />
        <Link to={`${url}/1`}>Post 1</Link>
        <br />
        <Link to={`${url}/2`}>Post 2</Link>
    </div>
);

export default Blog