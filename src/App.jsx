import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "GlobalStyle";
import { lazy, useState, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMatchMedia } from "helpers/mediaQuery";
import { useRefreshMutation, useLogoutMutation } from "redux/auth/authApiSlice";

import Modal from "components/common/Modal/Modal";
import Container from "components/common/container/Container";
import Header from "components/common/header/Header";
import Loader from "components/common/Loader/Loader";

import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublicRoute";

const AuthPage = lazy(() => import("pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AddExpencePage = lazy(() =>
  import("pages/AddExpencePage/AddExpencePage")
);
const AddIncomePage = lazy(() => import("pages/AddIncomePage/AddIncomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const [logout] = useLogoutMutation();
  const { isMobile } = useMatchMedia();

  const hendelLogOut = () => {
    logout();
    toggleModal();
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <Header toggleModal={toggleModal} />
      <Container>
        <Suspense fallback={<Loader />}>
          {showModal && (
            <Modal
              hendelLogOut={hendelLogOut}
              toggleModal={toggleModal}
              textModal="Вы действительно хотите выйти?"
            />
          )}
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route element={<PrivateRoute />}>
              {isMobile ? (
                //Mobile
                <>
                  <Route
                    path="/home/expense"
                    element={<Navigate to="/home" />}
                  />
                  <Route
                    path="/home/income"
                    element={<Navigate to="/home" />}
                  />

                  <Route path="/home" element={<HomePage />} />
                  <Route path="/expense" element={<AddExpencePage />} />
                  <Route path="/income" element={<AddIncomePage />} />
                </>
              ) : (
                //Tablet and Desktop
                <>
                  <Route
                    path="/home"
                    element={<Navigate to="/home/expense" />}
                  />
                  <Route
                    path="/expense"
                    element={<Navigate to="/home/expense" />}
                  />
                  <Route
                    path="/income"
                    element={<Navigate to="/home/expense" />}
                  />

                  <Route path="/home" element={<HomePage />}>
                    <Route path="expense" element={<AddExpencePage />} />
                    <Route path="income" element={<AddIncomePage />} />
                  </Route>
                </>
              )}
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<AuthPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
