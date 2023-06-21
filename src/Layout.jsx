import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "components/Header/Header";
import AuthView from "views/AuthView/AuthView";

const Layout = () => {
  return (
    <>
      <Header />
      <AuthView />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
