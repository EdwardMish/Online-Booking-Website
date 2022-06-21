import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

const WrapperDiv = styled.div`
  display: grid;
  grid-template-areas:
    "image title"
    "rating address"
    "rating links";
  grid-template-columns: min-content 1fr;
  grid-template-rows: max-content max-content;
  align-items: start;
  justify-content: start;
  column-gap: 24px;
  row-gap: 17px;
  padding: 19px 17px;
  border-radius: 5px;
  background-color: #90c61d0a;
  border: 1px solid #99cb2e;
  overflow: hidden;

  @media (min-width: 993px) {
    padding: 25px;
    grid-template-areas:
      "image title title"
      "image rating address"
      "image links links";
    grid-template-columns: min-content min-content 1fr;
    grid-template-rows: max-content min-content 1fr;
    row-gap: 10px;
    background-color: #fbfbfb;
    border: 1px solid #e5e5e5;
  }
`;

const H1 = styled.h1`
  grid-area: title;
  width: 100%;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 23px;
  line-height: 1.3;

  @media (min-width: 993px) {
    margin-top: 10px;
    font-size: 40px;
  }
`;

const P = styled.p`
  grid-area: address;
  display: inline-flex;
  gap: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  margin: 0;

  @media (min-width: 993px) {
    margin-left: -9px;
    font-size: 18px;
  }
`;

const RatingDiv = styled.span`
  grid-area: rating;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 16px;
  height: calc(14px * 1.3);

  @media (min-width: 993px) {
    height: calc(18px * 1.3);
  }
`;

const Image = styled.img`
  grid-area: image;
  min-width: 76px;
  aspect-ratio: 76 / 57;
  border-radius: 5px;
  object-fit: cover;
  background-color: #f0f3e8;

  @media (min-width: 993px) {
    min-width: 245px;
    aspect-ratio: 245 / 167;
    border-radius: 15px;
    background-color: #ebebeb;
  }
`;

const LinksUl = styled.ul`
  grid-area: links;
  display: none;
  gap: 34px;
  margin-top: -5px;

  @media (min-width: 993px) {
    padding-top: 15px;
    gap: 25px;
  }
`;

const SocialA = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 7px;
  white-space: nowrap;
  color: #2d2d2d;

  :hover {
    color: #2d2d2d;
  }

  @media (min-width: 993px) {
    font-size: 16px;
    color: #959595;

    :hover {
      color: #959595;
    }
  }
`;

interface PropertyCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  address: string;
  starRating: number;
  images: string[];
}

function PropertyCard(props: PropertyCardProps) {
  const { name, address, starRating, images, ...remainingProps } = props;

  const firstImage = images[0];

  return (
    <WrapperDiv {...remainingProps}>
      <Image src={firstImage} alt={name} />
      <H1>{name}</H1>
      <RatingDiv>
        {Array.from({ length: starRating }, (_, index) => (
          <IoIosStar key={index} fill="#FFBF29" />
        ))}
      </RatingDiv>
      <P>{address}</P>
      <LinksUl>
        <li>
          <Link href="/">
            <SocialA>
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                <path
                  d="M6.5 0C3.39875 0 0.875 2.54125 0.875 5.66562C0.875 10.105 5.97125 14.6887 6.18812 14.8812C6.2775 14.9606 6.38875 15 6.5 15C6.61125 15 6.7225 14.9606 6.81187 14.8819C7.02875 14.6887 12.125 10.105 12.125 5.66562C12.125 2.54125 9.60125 0 6.5 0ZM6.5 8.75C4.77687 8.75 3.375 7.34812 3.375 5.625C3.375 3.90187 4.77687 2.5 6.5 2.5C8.22312 2.5 9.625 3.90187 9.625 5.625C9.625 7.34812 8.22312 8.75 6.5 8.75Z"
                  fill="currentColor"
                />
              </svg>{" "}
              Show on map
            </SocialA>
          </Link>
        </li>
        <li>
          <Link href="/">
            <SocialA>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path
                  d="M7.00057 3.3535C3.12299 3.56958 0.00463867 7.01361 0.00463867 11.2155V14.1437L0.983681 11.7048C2.1416 9.22708 4.43897 7.64284 7.00057 7.49718V10.8485L13.213 5.4144L7.00057 0V3.3535Z"
                  fill="currentColor"
                />
              </svg>
              Share
            </SocialA>
          </Link>
        </li>
      </LinksUl>
    </WrapperDiv>
  );
}

export { PropertyCard };
