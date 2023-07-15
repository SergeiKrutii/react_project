import TransactionAdd from "components/TransactionAdd/TransactionAdd";
import Button from "components/common/button/Button";

function AddExpenceView() {
  return (
    <>
      <TransactionAdd
        description={"Описание товара"}
        category={"Категория товаров"}
      />
    </>
  );
}

export default AddExpenceView;
