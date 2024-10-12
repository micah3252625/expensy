import Header from "@/app/Components/MainPage/Header";
import SubHeader from "@/app/Components/MainPage/SubHeader";
import AllExpenses from "@/app/Components/MainPage/AllExpenses";

const Home = () => {
    return (
        <div className="poppins w-full h-screen flex justify-center items-center bg-green-800">
            <div className="w-[59%] relative max-lg:w-[97%] h-[760px] bg-white shadow-lg rounded-2xl p-12 px-[52px] max-sm:px-[30px]">
                <Header />
                <SubHeader />
                <AllExpenses />
            </div>
        </div>
    );
}
export default Home;
