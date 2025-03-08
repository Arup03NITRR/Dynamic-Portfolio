import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-6 mt-6">
      {/* GitHub */}
      <a 
        href="https://github.com/Arup03NITRR" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/arup-paul-963810194/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* Twitter/X */}
      <a 
        href="https://twitter.com/#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110"
      >
        <FaTwitter />
      </a>

      {/* Email */}
      <a 
        href="mailto:arup03.paul@gmail.com" 
        className="text-gray-400 hover:text-red-400 text-2xl transition-transform transform hover:scale-110"
      >
        <FaEnvelope />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/arup003/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-orange-400 text-2xl transition-transform transform hover:scale-110"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a 
        href="https://www.facebook.com/profile.php?id=100009466887771" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white-400 text-2xl transition-transform transform hover:scale-110"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
