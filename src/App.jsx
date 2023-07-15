import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "GlobalStyle";
import {
  useRefreshMutation,
  useGetUserMutation,
  useLogoutMutation,
} from "redux/auth/authApiSlice";

import {
  useGetIncomeQuery,
  useGetExpenceQuery,
} from "redux/transactions/transactionsApiSlice";

import PeriodSummary from "components/common/PeriodSummary/PeriodSummary";

import AuthView from "views/AuthView/AuthView";
import { useEffect, useState } from "react";
import Container from "components/common/container/Container";
import PrivateRoute from "components/routes/PrivateRoute";
import PublicRoute from "components/routes/PublicRoute";
import HomeView from "views/HomeView/HomeView";
import PopUp from "components/common/popUp/PopUp";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import Header from "components/common/header/Header";
import AddExpenceView from "views/AddExpenceView/AddExpenceView";
import AddIncomeView from "views/AddIncomeView/AddIncomeView";
import { Suspense } from "react";
import Modal from "components/common/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // const [refresh] = useRefreshMutation();
  const [getUser] = useGetUserMutation();
  const token = useSelector(authSelectors.selectToken);
  const [logout] = useLogoutMutation();

  // const sid = useSelector(authSelectors.selectSid);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);

  useGetExpenceQuery();
  useGetIncomeQuery();

  // useEffect(() => {
  //   if (token) {
  //     useGetExpenceQuery();
  //     useGetIncomeQuery();
  //   }
  // }, [token]);

  useEffect(() => {
    if (token) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // useEffect(() => {
  //   if (!!sid) {
  //     refresh(sid);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [refresh]);

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
      <PeriodSummary />
      <Container>
        {showModal && (
          <Modal
            hendelLogOut={hendelLogOut}
            toggleModal={toggleModal}
            textModal="Вы действительно хотите выйти?"
          />
        )}
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<HomeView />}>
                <Route path="add-expence" element={<AddExpenceView />} />
                <Route path="add-income" element={<AddIncomeView />} />
              </Route>
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<AuthView />} />
            </Route>
          </Routes>
          {/* <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<AuthView />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<HomeView />} />
            </Route>
            <Route path="add-expence" element={<AddExpenceView />} />
            <Route path="add-income" element={<AddIncomeView />} />

          </Routes> */}
        </Suspense>
      </Container>
    </>
  );
};

//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* next code PrivateRoute */}
//         {/* <Route
//           path="/home"
//           element={
//             <PrivateRoute redirectTo="/" component={<HomeView />} />
//           }
//         /> */}
//       </Route>
//       <Route path="/home" element={<HomeView />}></Route>
//       <Route path="add-expence" element={<AddExpenceView />} />
//       <Route path="add-income" element={<AddIncomeView />} />
// </Routes >

export default App;
