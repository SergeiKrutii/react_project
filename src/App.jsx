import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "GlobalStyle";
import {
  useRefreshMutation,
  useGetUserMutation,
} from "redux/auth/authApiSlice";
import { useEffect } from "react";
import Container from "components/common/container/Container";
import { PrivateRoute } from "components/routes/PrivateRoute";
import Layout from "Layout";
import HomeView from "views/HomeView/HomeView";

import PopUp from "components/common/popUp/PopUp";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import AddExpenceView from "views/AddExpenceView/AddExpenceView";
import AddIncomeView from "views/AddIncomeView/AddIncomeView";

const App = () => {
  // const [refresh] = useRefreshMutation();
  const [getUser] = useGetUserMutation();
  const token = useSelector(authSelectors.selectToken);
  // const sid = useSelector(authSelectors.selectSid);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [getUser, token]);

  // useEffect(() => {
  //   if (!!sid) {
  //     refresh(sid);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [refresh]);
  return (
    <>
      <GlobalStyle />
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* next code PrivateRoute */}
        </Route>
        <Route path="/home" element={<HomeView />}></Route>
        <Route path="add-expence" element={<AddExpenceView />} />
        <Route path="add-income" element={<AddIncomeView />} />
      </Routes>
      {/* </Container> */}
    </>
  );
};

export default App;
