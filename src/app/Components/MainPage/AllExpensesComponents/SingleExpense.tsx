import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const SingleExpense = () => {
    return (
        <div className="w-full bg-white rounded-lg border border-slate-100 shadow-md flex gap-3 items-center justify-between p-5 py-6">
            <div className="flex gap-3 items-center">
                {/*Wallet Icon*/}
                <div>
                    <div className="bg-green-200 rounded-lg p-2 flex items-center justify-center">
                        <HomeOutlinedIcon className="text-green-600" sx={{ fontSize: "27px" }} />
                    </div>
                </div>
                {/*Wallet Name*/}
                <div className="flex flex-col">
                    <span className="font-bold text-slate-600">Expense Name</span>
                    <div className="flex">
                        <span className="text-slate-400 text-[13px] p-[2px]">Wallet</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-11 font-bold items-center">
                <span className="text-[16px] text-slate-600">-20 ₱</span>
                <div className="flex gap-2 items-center">
                    {/*Edit Button*/}
                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-green-200 hover:bg-green-300">
                        <EditOutlinedIcon sx={{ fontSize: "17px" }} className="text-slate-600" />
                    </div>
                    {/*Delete Button*/}
                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-red-200 hover:bg-red-300">
                        <DeleteOutlinedIcon sx={{ fontSize: "17px" }} className="text-slate-600" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleExpense;
