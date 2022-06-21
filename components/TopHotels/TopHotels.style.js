import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 29px 0;
  .location_meta {
    margin-bottom: 29px;
  }
  a {
    &:hover {
      color: #31b8bd;
    }
  }
  .hotels-grid-container {
  }
`;

export const TextButton = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0 0;
  span {
    font-size: 21px;
    font-weight: 700;
    color: #2d2d2d;
  }
  @media (max-width: 767px) {
    margin-top: 19px;
  }
`;

export default Wrapper;
