import React, { createContext, useContext, useState } from 'react';
import { use100vh } from 'react-div-100vh';
import { hot } from 'react-hot-loader';

import { ThreeComponent } from './components/three';
import { Main } from './pages';
import { Color } from './style/color';

export enum Device {
  Small,
  Medium,
  Large
}

export enum ColorTheme {
  Light,
  Dark
}

export const DeviceContext = createContext(Device.Small)
export const ColorContext = createContext(ColorTheme.Light)

function Background({ 
  children 
}: {
  children: React.ReactNode | React.ReactNode[];
}) {

  const theme = useContext(ColorContext);
  const color = Color(theme)
  const height = use100vh();

  return <div style={ { 
    backgroundColor: color.backgroundColor,
    height: height ?? '100vh'
  } }>
    { children }
  </div>
}

function App() {

  const width = window.innerWidth
  const deviceSize = width >= 1024 ? Device.Large :
  width >= 720 ? Device.Medium : Device.Small
  const [device, setDevice] = useState<Device>(deviceSize)
  const theme = ColorTheme.Dark
  console.log('render')
  window.addEventListener('resize', (e) => {
    e.preventDefault();
    if(window.innerWidth >= 1024)  {
      setDevice(Device.Large)
    } else if (window.innerWidth >= 720) {
      setDevice(Device.Medium)
    } else {
      setDevice(Device.Small)
    }
  })

  return <DeviceContext.Provider value={ device }>
    <ColorContext.Provider value={ theme }>
      <Background>
        <ThreeComponent />
        <Main />
      </Background>
    </ColorContext.Provider>
  </DeviceContext.Provider>;
}

export default hot(module)(App);
