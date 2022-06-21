import { ReactNode } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 0;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.3;
  color: #4772ff;
  margin-bottom: 25px;

  @media (min-width: 993px) {
    font-size: 35px;
  }
`;

interface CheckoutStep {
  number: number;
  total: number;
  title: string;
  children?: ReactNode;
}

function CheckoutStep(props: CheckoutStep) {
  const { number, total, title, children } = props;

  return (
    <Div>
      <span style={{ display: "inline-flex", gap: 3.5 }}>
        {Array.from({ length: total }, (_, index) => (
          <svg key={index} width="7" height="7" viewBox="0 0 7 7" color="#4772FF">
            <circle
              cx="3.5"
              cy="3.5"
              r="3"
              stroke="currentColor"
              fill={index + 1 <= number ? "currentColor" : "none"}
            />
          </svg>
        ))}
      </span>
      <H1>{title}</H1>
      {children}
    </Div>
  );
}

export { CheckoutStep };
