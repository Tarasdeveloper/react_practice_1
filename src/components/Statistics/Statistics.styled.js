import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  & span {
    color: #fff;
  }
`;
