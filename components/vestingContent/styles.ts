import styled from 'styled-components';

export const Container: React.FC<{ isMobile?: boolean }> = styled.div`
  ${({ isMobile }) =>
    isMobile ? 'width:inherit; margin: 0; padding-left: 1em; padding-right: 1em; border: 0px;' : null}
  ${({ isMobile }) => (isMobile ? 'width: inherit; margin: 0' : ' margin-left: auto;  margin-right: auto;')};
  padding: ${({ isMobile }) => (isMobile ? '0 1em 0 1em' : '0.5em 2em 0.5em 2em')};
  background: rgba(0, 0, 0, 0.95);
  color: white;
  border-left: ${({ isMobile }) => (isMobile ? null : '#ffb600 12px solid')};
  font-size: 1.4em;
  text-shadow: 0 0 0.1em #c77d14;
  & span {
    display: block;
    text-align: -webkit-center;
  }
  & p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    strong {
      font-weight: normal;
      color: #fff6e2;
      text-shadow: 0 0 0.2em #ffb600;
      white-space: nowrap;
    }
  }
`;
export const VestingButton = styled.button`
  font-size: 2em;
  clear: both;
  margin: 1em auto 1em auto;
  padding: 0.3em 1em 0.1em 1em;
  background: #ffb600;
  border: 4px solid #7900bf;
  border-radius: 1em;
  box-shadow: 0 0 0.8em #c77d14;
  font-family: 'STRIP';
  color: black;
  line-height: normal;
`;
