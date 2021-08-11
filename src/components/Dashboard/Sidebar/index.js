import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='/'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to='/dashboard'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Dashboard
          </SidebarLink>
          <SidebarLink>
            More to come!
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
