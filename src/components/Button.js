import styled from 'styled-components';

export const Button = styled.a`
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;
  background: ${({ primary }) => (primary ? '#FFC22E' : '#1F5CC0')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#1F5CC0' : '#FFFFFF')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#FFFFFF' : '#FFC22E')};
};
`