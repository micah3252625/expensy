import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const ExpenseInput = () => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-slate-600">
                Expense Name
            </span>
            <div className="flex-gap gap-3 justify-between">
                {/* Input */}
                <div className="w-ful">
                    <input
                        type="text"
                        placeholder="Enter Expense Name..."
                        className="p-[10px] text-[13px] w-full rounded-md border outline-none" />
                    <p className="text-[11px] mt-2 text-red-500">This is an error</p>
                </div>
                {/* Icon */}
                <div className="w-12 h-10 text-white flex-items-center justify-center bg-green-600 rounded-md">
                    <ReceiptLongOutlinedIcon sx={{ fontSize: "21px" }} />
                </div>
            </div>
        </div>
    )
}

export default ExpenseInput;