import TransactionAdd from "components/TransactionAdd/TransactionAdd";
import { useSelector } from "react-redux";
import {
  useExpenseCategoryQuery,
  useAddExpenseMutation,
} from "redux/transactions/transactionsApiSlice";
import { useNavigate } from "react-router-dom";
import transactionSelectors from "redux/transactions/transactionsSelectors";
import { useTranslation } from "react-i18next";

const AddExpenceView = () => {
  const { data, isSuccess } = useExpenseCategoryQuery();
  const { t } = useTranslation();
  const [addExpense] = useAddExpenseMutation();
  const navigate = useNavigate();

  const handleConfirmExpense = async (expense) => {
    try {
      await addExpense(expense);
      if (isSuccess) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TransactionAdd
        descriptionTitle={t("productDescription.expense")}
        categoryTitle={t("categoryTitle.categoryExpense")}
        categoryes={data}
        onAddTransaction={handleConfirmExpense}
      />
    </>
  );
};

export default AddExpenceView;
