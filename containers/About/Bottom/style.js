import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 10px 0;
 .text-wrapper{
    text-align: center;
    margin: 50px 0;
    font-size: 1.1rem;
    &.enjoy-book{
        color: #4772FF;
        font-weight: bold;
        font-size: 1.5rem;
    }
 }
`;

const WrapperMobile = styled.div`
  width: 100%;
  margin-top: 50px;
  .gap{
      .text-wrapper{
          padding: 25px;
      }
      .image-col{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
  }
`;


export default Wrapper;
