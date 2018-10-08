import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../shared/panel';
import Input from '../shared/input';
import styles from './styles.module.scss';

const AppBar = ({titleText, search, searchValue}) => ( 
  <div className={styles.appBar} >
    <h1 className={styles.appTitle} > {titleText} </h1>
    <Panel>
      <Input cls={styles.searchInput} 
        placeholder="Search"
        onChange={search}
        value={searchValue}
        name="search"
        type="text" />
    </Panel>
  </div>
);

AppBar.defaultProps = {
  titleText: 'Title here',
	searchValue: '',
	search: () => null
};

AppBar.propTypes = {
  titleText: PropTypes.string,
  searchValue: PropTypes.string,
  search: PropTypes.func
};

export default AppBar;
