import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRouts = [
    {
        path: 'about',
        component: About,
    },
    {
        path: 'posts',
        component: Posts,
    },
    {
        path: 'posts/:id',
        component: PostIdPage,
    },
    {
        path: '*',
        component: Error,
    },
    {
        path: '/',
        component: Posts,
    },
];

export const publicRoutes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path: '*',
        component: Login,
    },
];
