import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "GlobalStyle";
import { useState } from "react";
import { Suspense } from "react";

import { useMatchMedia } from "helpers/mediaQuery";

import { useRefreshMutation, useLogoutMutation } from "redux/auth/authApiSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthView from "views/AuthView/AuthView";
import Modal from "components/common/Modal/Modal";
import Container from "components/common/container/Container";

import HomeView from "views/HomeView/HomeView";
import Header from "components/common/header/Header";
import AddExpenceView from "views/AddExpenceView/AddExpenceView";
import AddIncomeView from "views/AddIncomeView/AddIncomeView";

import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublicRoute";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const [logout] = useLogoutMutation();
  const { isMobile } = useMatchMedia();

  const hendelLogOut = () => {
    logout();
    toggleModal();
  };
  // const [refresh] = useRefreshMutation();
  // const token = useSelector(authSelectors.selectToken);
  // const { data } = useGetUserQuery(undefined, {
  //   skip: !token,
  //   refetchOnMountOrArgChange: true,
  // });

  // useEffect(() => {
  //   if (token) {
  //     getUser();
  //   }
  // }, [getUser, token]);

  // useEffect(() => {
  //   if (!!sid) {
  //     refresh(sid);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [refresh]);

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
        {showModal && (
          <Modal
            hendelLogOut={hendelLogOut}
            toggleModal={toggleModal}
            textModal="Вы действительно хотите выйти?"
          />
        )}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route element={<PrivateRoute />}>
              {isMobile ? (
                <>
                  <Route path="/home" element={<HomeView />} />
                  <Route
                    path="/home/expence"
                    element={<Navigate to="/expence" />}
                  />
                  <Route
                    path="/home/income"
                    element={<Navigate to="/income" />}
                  />

                  <Route path="/expence" element={<AddExpenceView />} />
                  <Route path="/income" element={<AddIncomeView />} />
                </>
              ) : (
                <>
                  <Route
                    path="/expence"
                    element={<Navigate to="/home/expence" />}
                  />
                  <Route
                    path="/income"
                    element={<Navigate to="/home/income" />}
                  />

                  <Route path="/home/" element={<HomeView />}>
                    <Route path="expence" element={<AddExpenceView />} />
                    <Route path="income" element={<AddIncomeView />} />
                  </Route>
                </>
              )}
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<AuthView />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
