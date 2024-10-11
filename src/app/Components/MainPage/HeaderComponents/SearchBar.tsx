import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

const SearchBar = () => {
    return (
        <div className={`h-[46px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[300px]`}>
            <div>
                <SearchOutlinedIcon className="text-slate-400"/>
            </div>
            <input type="text" placeholder="Search an expense..." className="bg-transparent outline-none w-full font-light" />
        </div>
    );
};
export default SearchBar;
