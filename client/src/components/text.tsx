import { useContext } from 'react';

import { ColorContext } from '../App';
import { Color } from '../style/color';

export enum FontSize {
    P10 = 10,
    P12 = 12,
    P14 = 14,
    P16 = 16,
    P18 = 18,
    P20 = 20,
    P24 = 24,
}

export default function CAText({
    fontSize = FontSize.P16,
    fontWeight = 'normal',
    color,
    msg,
    style,
}: {
    fontSize?:      FontSize;
    fontWeight?:    'normal' | 'bold' | 'lighter';
    color?:         string;
    msg:            any;
    style?:         React.CSSProperties;
}) {

    const theme = useContext(ColorContext)
    const themeColor = Color(theme)

    return <p style={ { 
        fontFamily: 'serif',
        fontWeight,
        fontSize,
        color: color ?? themeColor.text,
        ...style
    } }>{ `${msg}` }</p>
}