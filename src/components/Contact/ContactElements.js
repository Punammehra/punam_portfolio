import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
 
  .call{
    ${'' /* border:1px solid red; */}
    font-size: 1.7rem;
    align-items: center;
  flex-direction: column;
  justify-content: space-around;
    font-weight: 500;

  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 1.7rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
   .call {
      margin-bottom: 0;
      font-size: 1.7rem;
    }
  }
`;
