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
    onGetComments: PropTypes.func,
    id: PropTypes.number,
  };

  componentDidUpdate(prevProps) {
    const { id, onGetComments } = this.props;
    if (id !== prevProps.id) {
      onGetComments(id);
    };
  };

  render () {
    const { comments } = this.props;

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
  onGetComments: () => {},
  comments: []
};

const mSTP = state => ({ 
  comments: state.comments.data
});

const mDTP = dispatch => ({ 
  onGetComments: id => dispatch(getComments(id)) });

export default connect(mSTP, mDTP)(Comments);