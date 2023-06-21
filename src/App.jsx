import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "GlobalStyle";
import Container from "components/common/container/Container";
import { PrivateRoute } from "components/routes/PrivateRoute";
import Layout from "Layout";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* next code PrivateRoute */}
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
