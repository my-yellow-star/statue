import { use100vh } from 'react-div-100vh';

import CAText, { FontSize } from '../components/text';

export default function Main() {

    const height = use100vh()

    return <div style={ { 
        height: height || '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } }>
        <div style={ { position: 'absolute', zIndex: 1, justifyContent: 'center'}}>
        <CAText fontSize={ FontSize.P24 } msg="Developer Chana" />
        <CAText style={ { 
            marginTop: 12
        } } msg='Scroll Me' />
        </div>
    </div>
}
