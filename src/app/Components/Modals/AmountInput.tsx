

const AmountInput = () => {
  return (
    <div className="flex gap-2 flex-col mt-2 w-full">
        <span className="text-[14px] font-medium text-slate-600">Amount</span>
        <div className="flex gap-3 items-center">
            <div className="w-full">
                <input type="number"
                placeholder="Enter the amount..."
                className="p-[10px] text-[13px] w-full rounded-md border outline-none"/>
                <p className="text-[11px] mt-2 text-red-500">This is an error</p>
            </div>
        </div>
    </div>
  )
}

export default AmountInput