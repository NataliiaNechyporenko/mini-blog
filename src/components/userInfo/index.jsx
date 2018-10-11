import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserById } from '../../redux/actions/users';
import styles from './styles.module.scss';

class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      website: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({}),
      company: PropTypes.shape({})
    }),
    getUserById: PropTypes.func,
    userId: PropTypes.number,
  };
 
  // componentDidMount() {
  //   const { userId } = this.props;
  //   this.props.getUserById(userId);
  // }

  componentDidUpdate() {
    const { userId } = this.props;
    this.props.getUserById(userId);
  }

  render () {
    const { user } = this.props;

    return (
      <div className={styles.user_info_block}>
        <p className={styles.user_name}>{user.username}</p>
        <p className={styles.user_info}>{user.email}</p>
        <p className={styles.user_info}>{user.website}</p>
      </div>
)}};

UserInfo.defaultProps = {
  getUserById: {},
  userId: 0,
  user: {
    id: 0,
    name: 'Guest',
    username: 'Guest',
    website: '',
    phone: '',
    email: '',
    address: PropTypes.shape({}),
    company: PropTypes.shape({})
  }
};

const mSTP = state => ({ 
  user: state.user.data, 
});

const mDTP = { getUserById };

export default connect(mSTP, mDTP)(UserInfo);