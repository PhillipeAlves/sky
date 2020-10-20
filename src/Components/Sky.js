import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const dayLight = keyframes`
  0%,
  20% {
    background: #101c2a;
  }
  40%,
  70% {
    background: #87ceeb;
  }
  90%,
  100% {
    background: #101c2a;
  }
`

const animation = () =>
  css`
    ${dayLight} 30s linear infinite;
  `
const Sky = styled.div`
  animation: ${animation};
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  color: rgb(255, 255, 255);
`

export const SkyComponent = () => <Sky />
