import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {KeyboardArrowDownOutlined} from "@mui/icons-material";

const WalletOptions = () => {
    return (
        <div className="border p-2 rounded-md flex items-center gap-2 cursor-pointer">
            <HomeOutlinedIcon className="text-green-600" sx={{ fontSize: "27px"}} />
            <span className="text-[15px] mt-1 text-slate-500">Home Wallet</span>
            <KeyboardArrowDownOutlined fontSize="small" className="mt-[4px] text-slate-500" />
        </div>
    );
};
export default WalletOptions;
