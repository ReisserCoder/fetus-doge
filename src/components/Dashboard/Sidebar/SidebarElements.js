import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 40%;
  max-width: 200px;
  min-width: 160px;
  height: 100%;
  background: #1F5CC0;
  display: grid;
  align-items: center;
  margin-top: 79px;
  top: 0;
  left: 0;
  border: 1px solid;
  border-color: #FFC22E;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  justify: left;
  color: #FFF;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #FFF;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #FFF;
  cursor: pointer;

  &:hover {
    color: #FFC22E;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #FFC22E;
  white-space: nowrap;
  padding: 16px 64px;
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
