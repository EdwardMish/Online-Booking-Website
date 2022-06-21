import React from 'react';
import Sticky from 'react-stickynode';
import {
  FaceBookShare,
  TwitterShare,
  LinkedInShare,
  PinterestShare,
} from 'components/SocialShare/SocialShare';
import { Button, Menu, Dropdown } from 'antd';
import Favorite from 'components/UI/Favorite/Favorite';
import ScrollBar from 'components/UI/ScrollBar/ScrollBar';
import { TobBarWrapper, ButtonGroup } from '../SinglePageView.style';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';

const SocialShareMenu = (props) => {
  return (
    <Menu>
      <Menu.Item>
        <TwitterShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <FaceBookShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <LinkedInShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <PinterestShare {...props} />
      </Menu.Item>
    </Menu>
  );
};

const SideButtons = (props) => {
  return (
    <ButtonGroup>
      <Button
        type="text"
        onClick={() => {
          const h =
            document.querySelector('.location').getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, h);
        }}
      >
        <FaMapMarkerAlt /> Show on map
      </Button>

      <Dropdown
        placement="bottomRight"
        overlay={() => <SocialShareMenu {...props} />}
        overlayClassName="social_share_menu"
      >
        <Button type="text">
          <IoMdShareAlt />
          Share
        </Button>
      </Dropdown>
    </ButtonGroup>
  );
};

const TopBar = (props) => {
  const { title, shareURL, author, media, brand, location, rating, ratingCount } = props;

  return (
    <TobBarWrapper>
      <ScrollBar
        brand={brand}
        title={title}
        rating={rating}
        ratingCount={ratingCount}
        location={location}
        height={100}
        buttons={<SideButtons media={media} author={author} title={title} shareURL={shareURL} />}
      />
    </TobBarWrapper>
  );
};

export default TopBar;
