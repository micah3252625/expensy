import Header from "@/app/Components/MainPage/Header";
import SubHeader from "@/app/Components/MainPage/SubHeader";

const Home = () => {
    return (
        <div className="poppins w-full h-screen flex justify-center items-center bg-green-800">
            <div className="w-[59%] relative max-lg:w-[93%] h-[760px] bg-white shadow-lg rounded-2xl p-12 px-[52px]">
                <Header />
                <SubHeader />
            </div>
        </div>
    );
}
export default Home;
