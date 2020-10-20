import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const createClouds = clouds => {
  clouds = [...Array(clouds + 1).keys()]
  return clouds.map((_, key) => {
    const left = `${Math.floor(Math.random(1) * 100)}vw`
    const size = `${Math.floor(Math.random() * (500 - 30) + 30)}px`
    const bottom = `${Math.floor(Math.random(1) * (300 - 10) + 10)}px`

    const float = keyframes`
      from {
        transform: translateX(2000px);
      }
      to {
        transform: translateX(-2000px);
      }
    `

    const animation = () =>
      css`
        ${float} ${Math.floor(Math.random() * (500 - 30) + 30)}s linear infinite
      `

    const Clouds = styled.div`
      animation: ${animation};
      background-image: url(https://www.svgimages.com/svg-image/s7/cloud.svg);
      background-repeat: no-repeat;
      background-size: ${size};
      width: ${size};
      height: ${size};
      opacity: ${Math.random()};
      left: ${left};
      bottom: ${bottom};
      position: absolute;
      z-index: 1;
    `

    return <Clouds key={key} />
  })
}

const createdClouds = createClouds(100)

export const CloudsComponent = () => (
  <React.Fragment>{createdClouds}</React.Fragment>
)
