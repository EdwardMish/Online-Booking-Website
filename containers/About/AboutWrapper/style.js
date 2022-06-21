import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  h3{
    line-height: 1.2;
    font-weight: bold;
    font-size: 2rem;
    color: #2D2D2D;
  }
  .gap{
      .text-wrapper{
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
            font-size: 21px;
            color: #2D2D2D;
        }
      }
      .image-col{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
