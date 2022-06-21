import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 2rem;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem 0;
  }
  background-color: #40e8ff4f;
  > p {
    margin-bottom: 0;
  }
  .call-us {
    margin-top: 1rem;
    font-size: 1.8rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
