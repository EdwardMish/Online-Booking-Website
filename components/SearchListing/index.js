import { useState, useEffect, useContext } from 'react';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import ListingMap from 'containers/Listing/ListingMap';
import { SINGLE_POST_PAGE } from 'settings/constant';
import { LISTING_PAGE_POST_LIMIT } from 'settings/config';
import { PostsWrapper } from 'containers/Listing/Listing.style';
import { Row, Col } from 'antd';
import HotelListings from '../HotelListing/listing';
import { Pagination } from 'antd';
import ListingPageFilter from '../ListingPageFilter';

export default function Listing({ deviceType, query, fetching, processedData, location }) {
  const [loading, setLoading] = useState(fetching);
  const [current, setCurrent] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(fetching);
    setPosts(processedData.slice(0, LISTING_PAGE_POST_LIMIT));
  }, [fetching]);

  const handleLoadMore = (cur) => {
    setLoading(true);
    setCurrent(cur);
    const data = processedData.slice(
      (cur - 1) * LISTING_PAGE_POST_LIMIT,
      cur * LISTING_PAGE_POST_LIMIT
    );
    setPosts(data);
    setLoading(false);
  };

  return (
    <div style={{ margin: '4rem 0' }}>
      <h3 className="subTitle"> Available hotels </h3>
      <h1 className="title"> Book your stay now </h1>
      <Row gutter={[20, 20]}>
        <Col xs={24} xl={16}>
          <PostsWrapper>
            <HotelListings
              link={SINGLE_POST_PAGE}
              query={query}
              totalItem={processedData.length}
              limit={LISTING_PAGE_POST_LIMIT}
              rooms={posts}
              deviceType={deviceType}
              loading={loading}
              placeholder={<PostPlaceholder />}
            />
            <Pagination
              current={current}
              total={processedData.length}
              onChange={handleLoadMore}
              hideOnSinglePage={true}
              showSizeChanger={false}
            />
          </PostsWrapper>
        </Col>
        <Col xs={24} xl={8}>
          <ListingMap mapData={posts} geo={location} />
          <ListingPageFilter />
        </Col>
      </Row>
    </div>
  );
}
