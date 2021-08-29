import { Intro, Home } from "../pages";

const Routes = [
    {
        name: 'intro',
        path: '/',
        exact: true,
        component: Intro
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    }
]

export default Routes