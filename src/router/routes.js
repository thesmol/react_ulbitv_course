import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
// eslint-disable-next-line no-unused-vars
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
    }
];

export const publicRoutes = [
    {
        path: 'login',
        component: Login,
    }
];
