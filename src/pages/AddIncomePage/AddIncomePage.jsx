import { apiSlice } from "app/api/apiSlice";
import TransactionAdd from "components/TransactionAdd/TransactionAdd";
import { useMatchMedia } from "helpers/mediaQuery";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  useIncomeCategoryQuery,
  useAddIncomeMutation,
} from "redux/transactions/transactionsApiSlice";

const AddIncomeView = (props) => {
  const { data, isSuccess } = useIncomeCategoryQuery();
  const [addIncome] = useAddIncomeMutation();
  const navigate = useNavigate();
  const { isTablet, isMobile } = useMatchMedia();
  const handleConfirmIncome = async (income) => {
    try {
      await addIncome(income);
      if (isSuccess && isMobile) {
        navigate("/home");
      }
      if (isSuccess && isTablet) {
        navigate("/home/income");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TransactionAdd
        descriptionTitle={"Описание"}
        categoryTitle={"Категория"}
        categoryes={data}
        onAddTransaction={handleConfirmIncome}
      />
    </>
  );
};

AddIncomeView.propTypes = {};

export default AddIncomeView;
