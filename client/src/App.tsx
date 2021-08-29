import React, { createContext, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';

import RootContainer from './route/root';

export enum Device {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum ColorTheme {
  Light,
  Dark
}

const WINDOW_WITDH = window.innerWidth
const DEVICE_SIZE = WINDOW_WITDH >= 1024 ? Device.Large :
  WINDOW_WITDH >= 720 ? Device.Medium : Device.Small

export const DeviceContext = createContext(DEVICE_SIZE)
export const ColorContext = createContext(ColorTheme.Light)

function App() {

  
  const [device, setDevice] = useState<Device>(DEVICE_SIZE)
  const theme = ColorTheme.Dark

  useEffect(() => {
    function watchWindowWith() {
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
    }
    watchWindowWith()
    return () => {
      window.removeEventListener('resize', () => ({}))
    }
  }, [])

  return <DeviceContext.Provider value={ device }>
    <ColorContext.Provider value={ theme }>
      <RootContainer />
    </ColorContext.Provider>
  </DeviceContext.Provider>;
}

export default hot(module)(App);
