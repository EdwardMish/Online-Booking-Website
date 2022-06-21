import { Skeleton, Space, Row, Col, Card } from 'antd';
import { ListingSkeletonImage, ListingSkeletonContainer, ListingSkeletonContent } from './ListingSkeleton.style';

export const ListingSkeleton = () => {
    return  <ListingSkeletonContainer >
    <Row gutter={16}>
    <Col xl={6} xs={24}>
    <ListingSkeletonImage loading paragraph={false} />
    </Col>
    <Col xl={12} xs={24}>
      <ListingSkeletonContent title paragraph active loading  />
    </Col>
    <Col xl={6} >
      <Skeleton title paragraph={false} active loading />
      <Skeleton.Button loading paragraph={false} />
    </Col>
  </Row>
  </ListingSkeletonContainer>
}
