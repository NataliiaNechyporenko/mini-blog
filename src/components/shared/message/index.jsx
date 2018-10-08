import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Message = ({ msg }) => <p className={styles.message}>{msg}</p>;

Message.defaultProps = {
  msg: ''
};

Message.propTypes = {
  msg: PropTypes.string
};

export default Message;