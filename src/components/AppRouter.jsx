import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

function AppRouter() {
    return (
        <Routes>
            <Route path="posts" element={<Posts />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter