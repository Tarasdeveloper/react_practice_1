import styled from 'styled-components';

export const Online = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.status ? 'green' : 'aqua')};
`;
