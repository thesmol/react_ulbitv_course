import { Navigate, Route, Routes } from "react-router-dom";
import { privateRouts, publicRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRouts.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )}
                <Route path="*" element={<Navigate to="posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )}
                <Route path="*" element={<Navigate to="login" replace />} />
            </Routes>
    );
}

export default AppRouter