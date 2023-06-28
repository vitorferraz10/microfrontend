import styled from 'styled-components'
import { FuelTypography } from '@frete.com/fuel-react';
import React from 'react'

const ContainerHeader = styled.div`
  width: 100vw;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {

  return (
    <ContainerHeader>
      <FuelTypography
        spacingBottom={10}
        size="heading-lg"
        weight="bold"
        tag="h1"
        color="neutral-strong"
      >
        Header Remote
      </FuelTypography>
    </ContainerHeader>
  );
};

export default Header