import styled from "styled-components";
import { Modal } from "antd";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { HTMLAttributes } from "react";

const TimerWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #cd3838;
  font-size: 1.8rem;
  padding: 20px 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #cd383810;
    border-radius: 50%;
  }
`;

interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default 10 * 60 * 60 * 1000 // 10 minutes
   */
  durationMs?: number;

  onExpiration?: () => void;
}

export const CountdownTimer = (props: CountdownTimerProps) => {
  const { durationMs = 600_000, onExpiration, ...remainingProps } = props;

  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    return (
      <>
        {completed && (
          <Modal visible onOk={() => onExpiration?.()}>
            Booking offer has expired!
          </Modal>
        )}
        <TimerWrapper {...remainingProps}>
          <span className="icon">
            <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.75 0.25H8.25V2.75H15.75V0.25ZM10.75 16.5H13.25V9H10.75V16.5ZM20.7875 8.2375L22.5625 6.4625C22.025 5.825 21.4375 5.225 20.8 4.7L19.025 6.475C17.0875 4.925 14.65 4 12 4C5.7875 4 0.75 9.0375 0.75 15.25C0.75 21.4625 5.775 26.5 12 26.5C18.225 26.5 23.25 21.4625 23.25 15.25C23.25 12.6 22.325 10.1625 20.7875 8.2375ZM12 24C7.1625 24 3.25 20.0875 3.25 15.25C3.25 10.4125 7.1625 6.5 12 6.5C16.8375 6.5 20.75 10.4125 20.75 15.25C20.75 20.0875 16.8375 24 12 24Z"
                fill="#CD3838"
              />
            </svg>
          </span>
          <span className="text">
            {`Heads up! We can only reserve your rate for `}
            <b>{`${minutes}:${seconds.toString().padStart(2, "0")} minutes`}</b>
          </span>
        </TimerWrapper>
      </>
    );
  };
  return <Countdown date={Date.now() + durationMs} renderer={renderer} />;
};
