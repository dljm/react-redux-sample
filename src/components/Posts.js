import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

// use propTypes for validation
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// map the required global state variables from redux to props variables
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

// connect posts and fetchPosts to props
export default connect(mapStateToProps, { fetchPosts })(Posts);
