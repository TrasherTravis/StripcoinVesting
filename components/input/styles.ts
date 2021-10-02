import React from 'react';
import styled from 'styled-components'

export const Container: React.FC<{ isValid?: boolean }> = styled.span`
  border: ${({isValid}) => !isValid ? '4px solid #7900bf' : '4px solid red'};
  color: #ffb600;
  font-size: 1.3em;
  padding: 0.25em;
  background: white;
  box-shadow: 0 0 0.8em #c77d14;
  white-space: nowrap;
  width: 95%;
  text-align: right;
  font-family: 'STRIP';
`;


export const InnerInput: React.FC<any> = styled.input`
  background: none;
  border: none;
  text-align: right;
  color: black;
  font-size: 1em;
  width: 80%;
  padding-right: 0.5em;
  outline: none;
  font-family: 'STRIP';
`;