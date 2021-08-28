import { ColorTheme } from '../App';

export const Color = (theme: ColorTheme) => {
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