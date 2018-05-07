
import Dashboard from '../containers/dashboard/dashboard';

export const childRoutes = [
    {
        'path': '/',
        'component': Dashboard,
        'exact': true
    },
    {
        'path': '/dashboard',
        'component': Dashboard
    },
];