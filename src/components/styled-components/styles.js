import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledBtn = styled.button`
  width: 75px;
  height: 25px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;
export const BtnList = styled.ul`
  display: flex;
  gap: 25px;
`;
