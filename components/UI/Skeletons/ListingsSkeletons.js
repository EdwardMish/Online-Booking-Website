import { ListingSkeleton } from "./ListingSkeleton"
import { Skeleton,Col , Row, Card } from 'antd';
import { ListingSkeletonHeader } from "./ListingSkeleton.style";

export const ListingSkeletons = () => {
    return <>
       <ListingSkeletonHeader>
       <Row justify='center'>
            <Col xs={24} xl={4}>
                <Skeleton title active loading paragraph={false} />
            </Col>
            </Row>
            <Row justify='center'>
            <Col xs={24} xl={8}>
                <Skeleton title active loading paragraph={false}/>
            </Col>
        </Row>
       </ListingSkeletonHeader>
       <Row gutter={[16 , 16]}>
    <Col xs={24} xl={16}>
        <ListingSkeleton />
        <ListingSkeleton />
        <ListingSkeleton />
        </Col>
        <Col xs={24} xl={8}>
            <Card>
            <Skeleton  active loading />
            </Card>
        </Col>
        </Row>
    </>
}