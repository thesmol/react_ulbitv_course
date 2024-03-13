import { Route, Routes } from "react-router-dom";
import { privateRouts, publicRoutes } from "../router/routes";

function AppRouter() {

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
            </Routes>
    );
}

export default AppRouter