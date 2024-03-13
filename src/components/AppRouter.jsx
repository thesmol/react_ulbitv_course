import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="posts" element={<Posts />} />
            <Route exact path="posts/:id" element={<PostIdPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
            
        </Routes>
    )
}

export default AppRouter