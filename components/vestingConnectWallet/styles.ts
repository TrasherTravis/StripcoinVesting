import styled from 'styled-components';

export const ConnectWalletWidget = styled.div`
position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  clear: none;
  background: rgba(0, 0, 0, 0.95);
  color: white;
  border-left: #ffb600 12px solid;
  font-size: 1em;
  & p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  & a {
    color: #ffb600;
    display: block;
    white-space: nowrap;
    position: relative;
    & :hover {
      color: white;
    }
    
    & img {
      display: inline-block;
      position: absolute;
      top: 3px;
      right: 205px;
      width: 1em;
    }
  }  
}
`;

export const DisconnectButton = styled.a `
color: #7900bf !important;
display: block;
white-space: nowrap;
position: relative;
& :hover {
  color: white !important;
}
`