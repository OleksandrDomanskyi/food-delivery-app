import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage/ShoppingCartPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));
const CouponsPage = lazy(() => import('./pages/CouponsPage/CouponsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const MyRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path={'/'} element={<ShopPage />} />
                <Route path={'/cart'} element={<ShoppingCartPage />} />
                <Route path={'/history'} element={<HistoryPage />} />
                <Route path={'/discount'} element={<CouponsPage />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/register'} element={<RegisterPage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </Suspense>
    );
};

export default MyRoutes;