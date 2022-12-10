import React from 'react';
import {Layout} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
// import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import PropTypes from 'prop-types';
import {AiOutlineMenu} from 'react-icons/ai';

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  const {Header} = Layout;
  // const {Search} = Input;
  // const {messages} = useIntl();

  return (
    <Header className='app-header'>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      {/* <Search
        className='header-search'
        placeholder={messages['common.searchHere']}
      /> */}
      <div className='app-header-sectionDesktop'>
        <AppLanguageSwitcher />
      </div>
      <div className='app-header-section-mobile'>
        <AppLanguageSwitcher />
      </div>
    </Header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
