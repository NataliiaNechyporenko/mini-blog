import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../shared/input';
import { changeSearch } from '../../redux/actions/search';
import styles from './styles.module.scss';

const AppBar = ({currentSearchValue, onChange, titleText}) => ( 
  <div className={styles.appBar} >
    <div className={styles.contant_conteiner}>
    <Link to="/"><h1 className={styles.appTitle} > {titleText} </h1></Link>
      <Input cls={styles.searchInput} 
        placeholder="Search"
        onChange={evt => {onChange(evt.target.value)}}
        value={currentSearchValue}
        name="search"
        type="text" />
    </div>
  </div>
);

AppBar.defaultProps = {
  titleText: 'Title here',
};

AppBar.propTypes = {
  currentSearchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  titleText: PropTypes.string
};

const mSTP = state => ({
  currentSearchValue: state.searchValue
});

const mDTP = dispatch => ({
  onChange: (searchValue) => dispatch(changeSearch(searchValue)),
});

export default connect(mSTP, mDTP)(AppBar);
