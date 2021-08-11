import React from 'react';
import {
  FaBars,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavBtnLink,
  NavLogo,
  NavMenu
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#FFF' }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavLogo>ADABoy</NavLogo>
            <NavMenu>
              <NavItem>
                <NavBtnLink
                  to='/dashboard'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Connect Wallet
                </NavBtnLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;