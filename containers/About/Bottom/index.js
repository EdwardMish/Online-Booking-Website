import Wrapper from './style';
import { Row, Col } from 'antd';
import React from 'react'
import Image from 'next/image';
const image5 = '/images/about/about-5.png';

export default function Bottom() {
  return (
    <Wrapper>
        <Row className='text-wrapper'>
            <Col xl={4} xs={0}></Col>
            <Col  xl={16} xs={24}>The end result is you find the property you are looking for with the minimal number of clicks and zoom right through into the checkout on your phone, tablet, or computer. 
            </Col>
            <Col xl={4} xs={0}></Col>
        </Row>
        <Row className='text-wrapper enjoy-book'>
            <Col xl={8} xs={0}></Col>
            <Col  xl={8} xs={24}>Enjoy Book Online and all that we offer. We hope to add you to our list of growing happy customers.
            </Col>
            <Col xl={8} xs={0}></Col>
        </Row>
        <Row className='text-wrapper enjoy-book'>
            <Col xl={24} xs={24}>
                <Image src={image5} width={1440} height={470}/>
            </Col>
           
        </Row>
    </Wrapper>
  )
}
