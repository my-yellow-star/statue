import { Suspense, useCallback, useContext, useState } from 'react';
import { use100vh } from 'react-div-100vh';
import { useHistory } from 'react-router-dom';

import { ColorContext } from '../App';
import CAText, { FontSize } from '../components/text';
import { BoxComponent, StatueComponent } from '../components/three';
import '../style/animation/index.css';
import { getThemeColor } from '../style/color';

function Background({ 
    children 
  }: {
    children: React.ReactNode | React.ReactNode[];
  }) {
  
    const theme = useContext(ColorContext);
    const color = getThemeColor(theme)
    const height = use100vh();
  
    return <div style={ { 
      backgroundColor: color.backgroundColor,
      height: height ?? '100vh',
      overflowY: 'hidden',
    } }>
      { children }
    </div>
  }

function Loading() {
    return <div style={ { position: 'absolute', width: '100%', height: '100vh' } }>
    <BoxComponent />
    <CAText style={ { position: 'absolute', bottom: '10vh', width: '100%' } }
    fontSize={ FontSize.P24 } msg="Loading..." />
    </div>
}

export default function Intro() {

    const height = use100vh()
    const history = useHistory()
    const [fadeOut, setFadeOut] = useState(false)

    const handleStatueClicked = useCallback(() => {
        setFadeOut(true)
        setTimeout(() => {
            history.push('/home')
        }, 1000)
    }, [history])

    return <Background>
    <Suspense fallback={ <Loading /> }>
        <StatueComponent onStatueClick={ handleStatueClicked } />
        <div style={ { 
        height: height || '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } }>
        <div style={ { 
            position: 'absolute', 
            bottom: 0, 
            height: '40vh', 
            width: '100%', 
            zIndex: 1, 
            alignItems: 'center',
            background: 'linear-gradient(transparent, black, black)',
            } }>
            <div className={ ['animated', fadeOut ? 'fadeOut' : ''].join(' ') } style={ { position: 'absolute', bottom: '50px', width: '100%' } }>
                <CAText
                    style={ { 
                        alignSelf: 'center',
                    } } 
                    fontSize={ FontSize.P48 } 
                    msg="DEVELOPER CHANA" />
                <CAText style={ { 
                    marginTop: 12
                } } msg='Portfolio website' />
            </div>
        </div>
    </div>
    </Suspense>
    </Background>
}
