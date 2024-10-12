
const Footer = () => {
    const {
        openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow }
    } = useAppContext();


  return (
    <div className="w-full p-[12px] mt-8 mb-4 flex gap-3 justify-end px-7 items-center">
        <button onClick={() => setOpenExpenseWindow(false)} className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all">Cancel</button>
        <button className="bg-green-600 hover:bg-green-700 text-white text-[13px] p-2 px-3 rounded-md transition-all">Add Expense</button>
    </div>
  )
}

export default Footer