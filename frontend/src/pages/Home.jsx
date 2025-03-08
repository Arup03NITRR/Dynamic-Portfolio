import PhotoSection from "../components/Homepage/PhotoSection";
import TextSection from "../components/Homepage/TextSection";

const Home = () => {
    return (
        <div className="bg-[#082032] flex justify-between px-40 items-center h-screen">
            <TextSection />
            <PhotoSection />
        </div>
    );
};

export default Home;