import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './route';

export default function RootContainer() {
    return <BrowserRouter>
        { Routes.map(route => 
            <Route key={ route.name } exact={ route.exact ?? false } path={ route.path } component={ route.component } />
        ) }
    </BrowserRouter>
}