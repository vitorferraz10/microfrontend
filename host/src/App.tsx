import React from 'react';
import styled from 'styled-components'
import './globals.css'

const ContainerHome = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
`

const HeaderRemote = React.lazy(() => import("remoteHeader/Header"));
const FooterRemote = React.lazy(() => import("remoteFooter/Footer"));
const HomeRemote = React.lazy(() => import("remoteHome/Home"));





function App() {
  return (
    <ContainerHome className="App">
      <React.Suspense fallback={null}>
        <HeaderRemote />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <HomeRemote />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <FooterRemote />
      </React.Suspense>
    </ContainerHome>
  );
}

export default App;
