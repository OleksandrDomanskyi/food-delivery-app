import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage/ShoppingCartPage'));

const MyRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path={'/'} element={<ShopPage />} />
                <Route path={'/cart'} element={<ShoppingCartPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

export default MyRoutes;