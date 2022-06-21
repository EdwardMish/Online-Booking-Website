import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import Rating from "components/UI/Rating/Rating";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import { Button } from "antd";
import DescriptionWrapper from "./Description.style";

const Description = ({
  title,
  location,
  content,
  rating,
  ratingCount,
  titleStyle,
  locationMetaStyle,
  contentStyle,
}) => {
  return (
    <Element name="overview" className="overview" style={{ marginTop: "80px" }}>
      <DescriptionWrapper>
        <h3 className="subTitle"> ABOUT THE HOTEL </h3>
        <h1 className="title"> {title} </h1>
        <Text content={content} {...contentStyle} />
      </DescriptionWrapper>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
  titleStyle: {
    color: "#2D2D2D",
    fontSize: ["17px", "20px", "25px"],
    lineHeight: ["1.15", "1.2", "1.36"],
    mb: "4px",
  },
  locationMetaStyle: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#909090",
  },
  contentStyle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#2D2D2D",
    lineHeight: "1.6",
    textAlign: "center",
    opacity: 0.7,
    width: "90%",
    margin: "auto",
  },
};

export default Description;
