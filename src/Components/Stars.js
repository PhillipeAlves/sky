import React from "react";
import styled, { css, keyframes } from "styled-components";

const display = keyframes`
        0%,
        20% {
          opacity: 1;
        }
        40%,
        80% {
          opacity: 0;
        }
        90%,
        100% {
          opacity: 1;
        }
      `;

const displayStars = () =>
  css`
    ${display} 30s linear infinite
  `;

const Night = styled.div`
  animation: ${displayStars};
`;

const createStars = (stars) => {
  stars = [...Array(stars + 1).keys()];

  return stars.map((_, key) => {
    const colors = ["rgb(255, 255, 255)", "rgb(255, 255, 217)"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const left = `${Math.floor(Math.random(1) * 100)}vw`;
    const size = `${Math.floor(Math.random(1) + 3)}px`;
    const bottom = `${Math.floor(Math.random(1) * (1500 - 10) + 100)}px`;

    const shine = keyframes`
        0% {
        opacity: 0; 
        }
        100% {
        opacity: 1;     
        }
      `;

    const animation = () =>
      css`
        ${shine} ${Math.floor(Math.random(1) * 50 + 5)}s infinite alternate;
      `;

    const Stars = styled.div`
      animation: ${animation};
      left: ${left};
      width: ${size};
      height: ${size};
      background: ${randomColor};
      bottom: ${bottom};
      position: absolute;
      border-radius: 50%;
      box-shadow: 0 0 ${Math.floor(Math.random(1) * 5)}px
        ${Math.floor(Math.random(1) * 5)}px white;
    `;

    return <Stars key={key} />;
  });
};

const stars = createStars(100);

const StarsComponent = () => <Night>{stars}</Night>;

export default StarsComponent;
