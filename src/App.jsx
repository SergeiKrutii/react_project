import Container from "components/common/container/Container";
import AuthView from "views/AuthView/AuthView";
const App = (props) => {
  return (
    <>
      <Container>
        <AuthView />
      </Container>
    </>
  );
};

App.propTypes = {};

export default App;
