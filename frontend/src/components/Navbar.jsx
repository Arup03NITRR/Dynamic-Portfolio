import { Link } from "react-router-dom";

const Navbar_left = () => {
    return (
        <div className="flex items-center">
            <a href="#">
            <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-2xl font-extrabold rounded-full shadow-lg">
                AP
            </div>
            </a>
        </div>
    );
};

const Navbar_right = () => {
    return (
        <ul className="flex space-x-6 text-lg font-medium">
            <li> <Link to="/" className="hover:text-cyan-400 focus:text-cyan-400"> Home </Link> </li>
            <li> <Link to="/about" className="hover:text-cyan-400 focus:text-cyan-400"> About </Link> </li>
            <li> <Link to="/projects" className="hover:text-cyan-400 focus:text-cyan-400"> Projects </Link> </li>
            <li> <Link to="/experiences" className="hover:text-cyan-400 focus:text-cyan-400"> Experiences </Link> </li>
            <li> <Link to="/blogs" className="hover:text-cyan-400 focus:text-cyan-400"> Blogs </Link> </li>
            <li> <Link to="/resume" className="hover:text-cyan-400 focus:text-cyan-400"> Resume </Link> </li>
            <li> <Link to="/contact" className="hover:text-cyan-400 focus:text-cyan-400"> Contact </Link> </li>
        </ul>
    );
};

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md sticky top-0 z-100">
            <Navbar_left />
            <Navbar_right />
        </nav>
    );
};

export default Navbar;
