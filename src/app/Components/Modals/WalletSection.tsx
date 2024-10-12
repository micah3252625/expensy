import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
const WalletSection = () => {
  return (
    <div className="flex gap-2 flex-col mt-2 w-ful">
        <span className="text-[14px] font-medium text-slate-600">Wallet</span>
        <div className="border p-[9px] rounded-md flex items-center justify-between gap-2">
            <div className="flex gap-2 items-center">
                  <HomeOutlinedIcon className="text-green-600" sx={{ fontSize: "22px"}}/>
                  <span className="text-[13px] mt-[2px] text-slate-500">Home Wallet</span>
            </div>
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
        </div>
    </div>
  )
}

export default WalletSection