import React from 'react';
import styled from 'styled-components';

export const ContainerLogo: React.FC<{ isMobile?: boolean }> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image: React.FC<{ isMobile?: boolean, src?: string, alt?: string, vesting?: boolean, width?: string}> = styled.img`
  ${({isMobile}) => !isMobile ? 'padding: 1em' : 'width: 80%'};
  ${({vesting}) => vesting && 'margin: 1em;'};
  ${({vesting}) => vesting && 'padding: 0;'};
`;

export const VestingImage: React.FC<any> = styled.img`
padding: 1em;
`