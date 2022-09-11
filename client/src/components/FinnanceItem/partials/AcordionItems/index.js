import styled from 'styled-components';

export const AcordionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const Title = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex: 1 1 100%;
  font-size: 15px;

  font-weight: 700;
`;

export const SubTitle = styled.div`
  font-family: 'Roboto';
  font-size: 15px;

  display: flex;
  justify-content: flex-end;

  font-weight: 400;
  max-width: 70px;
  width: 100%;
`;

export const Price = styled(SubTitle)`
  color: black;
`;

export const ChangePrice = styled(SubTitle)`
  ${(props) =>
    props.upOrDown
      ? `&:before {
      content: "+";
    }
    color: green;
  `
      : 'color: red;'}
`;

export const Income = styled(SubTitle)`
  display: flex;
  align-items: center;
  color: ${(props) => (props.upOrDown ? 'green' : 'red')};
  &:before {
    content: '${(props) => (props.upOrDown ? '🠉	' : '🠋')}';
    font-size: 13px;
  }

  &:after {
    content: '%';
  }
`;
