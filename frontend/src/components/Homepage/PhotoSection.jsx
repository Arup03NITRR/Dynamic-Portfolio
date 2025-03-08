import profilephoto from "../../assets/Profile_Photo_2.png"
import blobimage from "../../assets/blob.png"


const PhotoSection = () => {
    return (
        <div className="flex justify-center item-center relative group h-100 w-100 ">
            {/* Blob Image as Background */}
            <img 
                    src={blobimage} 
                    alt="Blob Image" 
                    className="absolute w-[400px] z-10 transition-transform duration-300 group-hover:rotate-45"
            />

            {/* Profile Image Centered on Blob */}
            <img 
                    src={profilephoto} 
                    alt="Profile Photo" 
                    className="absolute transform translate-y-[-20%] w-[320px] h-auto rounded-full z-20 transition-transform duration-300 group-hover:scale-99"
            />
        </div>
    );
}

export default PhotoSection;