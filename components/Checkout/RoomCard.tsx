import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 24px;
  padding: 19px 17px;
  border-radius: 5px;
  background-color: #fbfbfb;
  border: 1px solid #e5e5e5;

  @media (min-width: 993px) {
    padding: 25px;
    flex-wrap: nowrap;
  }
`;

const Image = styled.img`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 354 / 146;
  border-radius: 5px;
  object-fit: cover;
  background-color: #ebebeb;

  @media (min-width: 993px) {
    width: 245px;
    aspect-ratio: 245 / 167;
    border-radius: 15px;
  }
`;

const BadgeSpan = styled.span`
  display: inline-flex;
  border: 1px solid #ffbf29;
  border-radius: 50px;
  padding: 9px 24px;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
  white-space: nowrap;
  margin-right: 25px;
  display: none;

  @media (min-width: 993px) {
    display: initial;
  }
`;

const TitleH1 = styled.h1`
  display: inline-flex;
  font-size: 23px;
  line-height: 1.3;
  font-weight: 700;
  margin: 0;

  @media (min-width: 993px) {
    font-size: 30px;
  }
`;

const AmenitiesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;
  margin-top: 20px;
  column-gap: 4%;
  width: 100%;

  @media (min-width: 993px) {
    grid-auto-flow: column;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: none;
  }

  /* li:nth-of-type(-n + 3), */
  li:last-of-type {
    display: none;

    @media (min-width: 993px) {
      display: initial;
    }
  }
`;

const AmenitySpan = styled.span`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  gap: 10px;

  @media (min-width: 993px) {
    gap: 20px;
  }
`;

interface RoomCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  images: string[];
  amenities: string[];
}

function RoomCard(props: RoomCardProps) {
  const { name, images, amenities, ...remainingProps } = props;

  const firstImage = images[0];

  return (
    <WrapperDiv {...remainingProps}>
      <Image src={firstImage} alt={name} />
      <div style={{ flexGrow: 1 }}>
        <BadgeSpan>Room 1</BadgeSpan>
        <TitleH1>{name}</TitleH1>
        <AmenitiesUl>
          {/* <li>
            <b>1x Double Bed</b>
          </li>
          <li>380 sq feet</li>
          <li>Wifi included</li> */}
          {amenities.slice(0, 11).map((amenity) => (
            <li key={amenity} style={{ overflow: "hidden" }}>
              <AmenitySpan>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="10" fill="#4772FF" />
                  <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{amenity}</span>
              </AmenitySpan>
            </li>
          ))}
          <li>
            <AmenitySpan>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 3"
                fill="none"
                style={{ padding: "0 2px" }}
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#2D2D2D" />
                <circle cx="7.5" cy="1.5" r="1.5" fill="#2D2D2D" />
                <circle cx="13.5" cy="1.5" r="1.5" fill="#2D2D2D" />
              </svg>
              All amenities
            </AmenitySpan>
          </li>
        </AmenitiesUl>
      </div>
    </WrapperDiv>
  );
}

export { RoomCard };
