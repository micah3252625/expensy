import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Header = () => {
    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                {/* Category Icon */}
                <div className="p-[27px] bg-green-200 rounded-lg flex items-center justify-center">
                    <ReceiptLongOutlinedIcon sx={{ fontSize: "12px" }} className="text-green-600" />
                </div>
                {/* Category Header */}
                <span className="font-semibold text-lg">Add Expense</span>
            </div>

            <CloseOutlinedIcon onClick={() => setOpenExpenseWindow(false)} sx={{ fontSize: "18px" }} className="text-slate-300 cursor-pointer" />
        </div>
    )
}

export default Header;