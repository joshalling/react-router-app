import React, { Component } from 'react';

export class BlogPost extends Component {
    render() {
        return(
            <div className="main-content">
                This is a blog post. Its id is {this.props.match.params.postId}
            </div>
        )
    }
}