import { FuelTypography } from '@frete.com/fuel-react';
import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.div`
  width: 100vw;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Footer = () => {
  return (
    <ContainerFooter>
      <FuelTypography
        spacingBottom={10}
        size="heading-lg"
        weight="bold"
        tag="h1"
        color="neutral-inverted"
      >
        Footer Remote
      </FuelTypography>
    </ContainerFooter>
  );
};

export default Footer