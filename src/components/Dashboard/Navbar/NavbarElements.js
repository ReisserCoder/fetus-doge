import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #1F5CC0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid;
  border-color: #FFC22E;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled.p`
  color: #FFC22E;
  margin-left: 48px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: block;
    color: '#1F5CC0';
    position: absolute;
    top: 0;
    left: 120;
    margin-left: 24px;
    margin-top: 4px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;

export const NavItem = styled.li`
  height: 80px;
  color: #FFF;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkR)`
  color: '#1F5CC0';
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #FFC22E;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-top: 20px;
  margin-right: 5px;
  background: #FFC22E;
  white-space: nowrap;
  padding: 10px 22px;
  color: #1F5CC0;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFF;
    color: #1F5CC0;
  }
`;
