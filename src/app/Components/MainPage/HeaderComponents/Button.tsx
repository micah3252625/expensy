import {AddOutlined} from "@mui/icons-material";

const Button = () => {
    return (
        <button className="bg-green-800 gap-1 p-[12px] flex text-sm rounded-md text-white items-center justify-center pr-[18px] hover:bg-green-900">
            <AddOutlined sx={{fontSize: "20px"}} />
            <span>New Expense</span>
        </button>
    );
};
export default Button;
