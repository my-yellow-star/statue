import { ColorTheme } from '../App';

export enum Color {
    grey = '#474747',
    yellow = 'yellow',
    pink = '#eb1e99',
    blue = '#1c29e0'
}

export const getThemeColor = (theme: ColorTheme) => {
    switch(theme) {
        case ColorTheme.Light:
            return {
                backgroundColor: '#ffffff',
                text: '#000000'
            }
        case ColorTheme.Dark:
            return {
                backgroundColor: '#000000',
                text: '#ffffff'
            }
        default:
            throw new Error('INVALID COLOR THEME')
    }
}