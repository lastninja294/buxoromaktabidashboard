import React from 'react';
import {Layout} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
import PropTypes from 'prop-types';
import {AiOutlineMenu} from 'react-icons/ai';

const AppHeader = ({showDrawer}) => {
  const {Header} = Layout;

  return (
    <Header className='app-BitBucket-header'>
      <a className='trigger' onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
    </Header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
