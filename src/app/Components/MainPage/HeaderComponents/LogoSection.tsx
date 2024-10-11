import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined"
import React from "react";

const LogoSection = () => {
    return (
        <div className="flex gap-2 items-center">
            {/*Icon Container*/}
            <div className={`bg-green-600 flex items-center justify-center p-[11px] rounded-lg`}>
                {/*Icon*/}
                <div className="w-[26px] h-[26px] items-center justify-center flex">
                    <SavingsOutlinedIcon sx={{ fontSize: "25px"}} className="text-white" />
                </div>
            </div>
            {/*App Name*/}
            <div className="flex gap-1 text-[24px]">
                <span className={`font-bold text-green-600`}>Expensy</span>
                |
                <span className="text-slate-600">Wise Expense Tracker</span>
            </div>
        </div>
    );
};
export default LogoSection;
