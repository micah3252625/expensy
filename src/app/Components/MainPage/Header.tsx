
import LogoSection from "@/app/Components/MainPage/HeaderComponents/LogoSection";
import SearchBar from "@/app/Components/MainPage/HeaderComponents/SearchBar";
import Button from "@/app/Components/MainPage/HeaderComponents/Button";

const Header = () => {
    return (
        <nav className="flex justify-between items-center">
            <LogoSection />
            <SearchBar />
            <Button />
        </nav>
    );
};
export default Header;
