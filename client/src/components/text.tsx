import { useContext } from 'react';

import { ColorContext } from '../App';
import { getThemeColor } from '../style/color';

export enum FontSize {
    P10 = 10,
    P12 = 12,
    P14 = 14,
    P16 = 16,
    P18 = 18,
    P20 = 20,
    P24 = 24,
    P36 = 36,
    P48 = 48
}

export default function CAText({
    fontSize = FontSize.P16,
    fontWeight = 'normal',
    color,
    msg,
    style,
    className = ''
}: {
    fontSize?:      FontSize;
    fontWeight?:    'normal' | 'bold' | 'lighter';
    color?:         string;
    msg:            any;
    style?:         React.CSSProperties;
    className?:     string;
}) {

    const theme = useContext(ColorContext)
    const themeColor = getThemeColor(theme)

    return <p className={ className } style={ { 
        fontFamily: 'serif',
        fontWeight,
        fontSize,
        color: color ?? themeColor.text,
        textAlign: 'center',
        ...style
    } }>{ `${msg}` }</p>
}