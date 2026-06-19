import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import DefaultLayout from '~/layouts/DefaultLayout';
const publicRoute = [
    {
        path: '/home',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
];

export { publicRoute };