import Home from '~/pages/Home';
import ManageCourses from '~/pages/ManageCourses';
import Profile from '~/pages/Profile';
import News from '~/pages/News';
import DefaultLayout from '~/layouts/DefaultLayout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
    {
        path: '/news',
        component: News,
        layout: DefaultLayout,
    },
    {
        path: 'courses/manage',
        component: ManageCourses,
        layout: DefaultLayout,
    },
];

export { publicRoutes };
