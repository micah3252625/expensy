import ListHeader from "@/app/Components/MainPage/AllExpensesComponents/ListHeader";
import ExpensesList from "@/app/Components/MainPage/AllExpensesComponents/ExpensesList";

const AllExpenses = () => {
    return (
        <div className="mt-16">
            <ListHeader />
            <ExpensesList />
        </div>
    )
}
export default AllExpenses;
