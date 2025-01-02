const Nav = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id); 
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" }); 
        }
    };

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-2">
            <ul className="flex space-x-8 my-4 justify-center font-medium">
                <li>
                    <button onClick={()=>handleScroll('home')} className="hover:text-emerald-400">Home</button>
                </li>
                <li>
                    <button onClick={() => handleScroll("experience")} className="hover:text-emerald-400">
                        Experience
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("skills")} className="hover:text-emerald-400">
                        Skills
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("projects")} className="hover:text-emerald-400">
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("contact")} className="hover:text-emerald-400">
                       Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
