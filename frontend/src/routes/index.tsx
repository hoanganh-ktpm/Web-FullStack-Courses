import Home from '~/pages/Home';
import CreateCourse from '~/pages/CreateCourse';
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
        path: 'courses/create',
        component: CreateCourse,
        layout: DefaultLayout,
    },
];

export { publicRoutes };
