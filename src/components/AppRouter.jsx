import { Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";

function AppRouter() {
    return (
        <Routes>
            {routes.map((route) =>
                <Route
                    key = {route.path}
                    path={route.path}
                    element={<route.component />}
                />
            )}
        </Routes>
    );
}

export default AppRouter