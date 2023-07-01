import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AuthView from "views/AuthView/AuthView";

const Layout = () => {
  return (
    <>
      <AuthView />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
