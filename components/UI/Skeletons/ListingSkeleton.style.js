import styled from "styled-components";
import { Card, Skeleton } from 'antd';

export const ListingSkeletonImage = styled(Skeleton.Image)`
    width: 100%;
    height: 100%;
    .ant-skeleton-image {
        width: 100%;
        height: 300px;
        @media (min-width: 1200px) {
        height: 100%;
        }
    }
`;
export const ListingSkeletonContainer = styled(Card)`
border-radius: 5px;
margin-bottom: 20px;

    .ant-card-body {
        @media (min-width: 1200px) {
        padding-left: 0px;
        padding-bottom: 0px;
        padding-top: 0px;
        }
    }
`;

export const ListingSkeletonContent= styled(Skeleton)`
    margin-bottom: 20px;
`;

export const ListingSkeletonHeader = styled.div`
    padding: 4rem 0 2rem;
`;