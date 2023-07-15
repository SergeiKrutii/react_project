import TransactionAdd from "components/TransactionAdd/TransactionAdd";
import PropTypes from "prop-types";

const AddIncomeView = (props) => {
  return (
    <>
      <TransactionAdd description={"Описание"} category={"Категория"} />
    </>
  );
};

AddIncomeView.propTypes = {};

export default AddIncomeView;
