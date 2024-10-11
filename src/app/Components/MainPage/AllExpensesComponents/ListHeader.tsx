
const ListHeader = () => {
    return (
        <div className="flex justify-between mb-4 items-center px-1">
            <div>
                <span className="font-bold text-[15px] text-slate-700">August 22nd 2024</span>
            </div>
            <div className="flex gap-7 text-slate-400 text-[13px] font-semibold">
                <span>Number of transaction: 03</span>
                <span>Value: ₱400</span>
            </div>
        </div>
    )
}
export default ListHeader;

