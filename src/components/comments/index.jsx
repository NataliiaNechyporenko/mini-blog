import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../../redux/actions/comments';
import styles from './styles.module.scss';

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      postId: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })),
    getComments: PropTypes.func,
    id: PropTypes.number,
  };
 
  componentDidMount() {
    const { id } = this.props;

    this.props.getComments(id);
  }

  render () {
    const { comments } = this.props;
    console.log(comments);
    return (
<div className={styles.list}>
<h3 className={styles.comments_title}>Comments:</h3>
      {comments.length === 0 ? 
      <p>There is no comments!</p>
      : (comments.map(comment => (
          <div key={comment.id} className={styles.comment_wrapper}>
            <p className={styles.comment_author}>{comment.name}</p>
            <p className={styles.comment_text}>{comment.body}</p>
          </div>
          )
      ))
    }
  </div>
)}};


Comments.defaultProps = {
  id: 0,
  getComments: {},
  comments: {
    id: 0,
    postId: 0,
    title: 'Post title',
    body: 'No text',
  }
};

const mSTP = state => ({ 
  comments: state.comments.data
});

const mDTP = { getComments };

export default connect(mSTP, mDTP)(Comments);