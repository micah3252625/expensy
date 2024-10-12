const ExpenseModal = () => {
  const {
    openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow }, 
  } = useAppContext();
  return (
    <div className={`${openExpenseWindow ? "block" : "hidden"} w-[48%] max-sm:w-[82%] z-50 p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-md shadow-md`}>
      
    </div>
  )
}

export default ExpenseModal