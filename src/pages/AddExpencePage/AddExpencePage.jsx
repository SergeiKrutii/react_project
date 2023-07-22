import TransactionAdd from "components/TransactionAdd/TransactionAdd";
import { useSelector } from "react-redux";
import {
  useExpenceCategoryQuery,
  useAddExpenceMutation,
} from "redux/transactions/transactionsApiSlice";
import { useNavigate } from "react-router-dom";
import transactionSelectors from "redux/transactions/transactionsSelectors";

const AddExpenceView = () => {
  const { data, isSuccess } = useExpenceCategoryQuery();
  const [addExpence] = useAddExpenceMutation();
  const navigate = useNavigate();

  const handleConfirmExpense = async (expense) => {
    try {
      await addExpence(expense);
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
        descriptionTitle={"Описание товара"}
        categoryTitle={"Категория товаров"}
        categoryes={data}
        onAddTransaction={handleConfirmExpense}
      />
    </>
  );
};

export default AddExpenceView;
