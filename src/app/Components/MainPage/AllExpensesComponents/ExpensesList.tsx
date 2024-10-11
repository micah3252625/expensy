import SingleExpense from "@/app/Components/MainPage/AllExpensesComponents/SingleExpense";

const ExpensesList = () => {
    return (
        <div className="flex p-1 mt-4 items-center flex-col gap-5 h-[400px] overflow-y-auto">
            <SingleExpense />
        </div>
    )
}
export default ExpensesList;
