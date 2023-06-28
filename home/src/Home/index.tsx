import { FuelTypography } from '@frete.com/fuel-react'
import React from 'react'
import styled from 'styled-components'

const ContainerHome = styled.div`
  height: 100%;
  width: 100vw;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <ContainerHome>
      <FuelTypography
        spacingBottom={10}
        size="heading-lg"
        weight="bold"
        tag="h1"
        color="neutral-inverted"
      >
        Home Remote
      </FuelTypography>
    </ContainerHome>
  );
}

export default Home