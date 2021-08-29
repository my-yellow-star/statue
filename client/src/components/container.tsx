import { CSSProperties, useContext } from 'react';

import { ColorContext } from '../App';
import { getThemeColor } from '../style/color';

export function Container({
    children,
    style,
}: {
    children?: React.ReactNode | React.ReactNode[]
    style?: CSSProperties
}) {

    const theme = useContext(ColorContext)
    const color = getThemeColor(theme)

    return <div style={ { 
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        backgroundColor: color.backgroundColor,
        ...style,
    } }>
        { children }
    </div>
}