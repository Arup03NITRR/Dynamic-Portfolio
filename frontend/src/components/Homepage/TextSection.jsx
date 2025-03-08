import SocialMediaIcons from "./SocialMediaSection";

const TextSection = () => {
    return (
        <div className="flex flex-col justify-center h-screen bg-[#082032] text-white px-6">
            {/* Greeting */}
            <h3 className="text-lg font-medium text-gray-300">Hello,</h3>

            {/* Introduction */}
            <h1 className="text-5xl font-bold mt-2">I'm <span className="text-blue-400">Arup</span></h1>

            {/* Skill Intro */}
            <h2 className="text-xl font-semibold mt-4 text-gray-300">
                Full-Stack Developer & Machine Learning Enthusiast <br /> 
                <span className="text-blue-400">Bridging Software & Intelligence</span>
            </h2>

            {/* Short Bio */}
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
                Passionate about crafting scalable web applications and leveraging AI to solve real-world challenges.
            </p>

            {/* Call-to-Action Button */}
            <a 
                href="#contact" 
                className="mt-6 px-6 py-3 bg-blue-500 w-40 hover:bg-blue-600 transition-all duration-300 rounded-lg text-lg font-medium focus:scale-95"
            >
                Let's Connect
            </a>
            <SocialMediaIcons />
        </div>
    );
}

export default TextSection;