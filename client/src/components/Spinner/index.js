import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 8vh;
  & svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

const Spinner = () => {
  return(
    <StyledSpinner>
      <svg
        width={50}
        height={50}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        style={{ background: '0 0' }}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#a7a7a7"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(162.055 50 50)"
        />
      </svg>
    </StyledSpinner>
  )
}



export default Spinner;