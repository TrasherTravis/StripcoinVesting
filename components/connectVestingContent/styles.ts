import styled from 'styled-components';

export const Container: React.FC<{ isMobile?: boolean }> = styled.div`
  ${({ isMobile }) =>
    isMobile ? 'width:inherit; margin: 0; padding-left: 1em; padding-right: 1em; border: 0px;' : null}
  ${({ isMobile }) => (isMobile ? 'width: inherit; margin: 0' : ' margin-left: auto;  margin-right: auto;')};
  padding: ${({ isMobile }) => (isMobile ? '0 1em 0 1em' : '0.5em 2em 0.5em 2em')};
  background: rgba(0, 0, 0, 0.95);
  border-left: ${({ isMobile }) => (isMobile ? null : '#ffb600 12px solid')};
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 1.4em;
  text-shadow: 0 0 0.1em #c77d14;
  & h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  & p {
    display: block;
    line-height: initial;
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

export const WithdrawButton = styled.button`
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

export const ContentDiv = styled.div`
  font-size: 0.8em;
  color: #bbbaba;
  text-shadow: none;
  & hr {
    border: 0px;
    border-top: 8px dotted #7900bf;
    margin-top: 0;
  }
  & span {
    display: block;
    text-align: -webkit-center;
  }
`;

export const VestingTable = styled.table`
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
  & td {
    display: table-cell;
    vertical-align: inherit;
  }
  & tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
`;

export const TableValues = styled.td`
  font-family: monospace;
  text-align: right;
  padding-left: 2em;
  color: #ffcd5c;
  text-shadow: 0 0 0.1em #c77d14;
`;

export const StyledLink = styled.a`
  color: #ffb600;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: underline;
  & :hover {
    color: white;
  }
`;
