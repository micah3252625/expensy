import WalletOptions from "@/app/Components/MainPage/SubHeaderComponents/WalletOptions";
import ClearAllButton from "@/app/Components/MainPage/SubHeaderComponents/ClearAllButton";

const SubHeader = () => {
    return (
        <div className="mt-[90px] flex justify-between">
            <WalletOptions />
            <ClearAllButton />
        </div>
    )
}
export default SubHeader;
