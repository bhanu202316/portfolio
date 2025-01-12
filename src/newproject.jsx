function Projects() {
    const projects = [
        {
            id: 1,
            title: "Derma Home",
            description: "A website for people who want to care skin with natural products and remedies with Html, Javascript and CSS.",
            image: "derma1.jpg",
            demoLink: "https://your-portfolio-demo-link.com",
            repoLink: "https://github.com/bhanu202316/portfolio",
        },
        {
            id: 2,
            title: "E-commerce App",
            description: "A feature-rich e-commerce platform with React and Node.js.",
            image: "amazon.png",
            demoLink: "https://your-ecommerce-demo-link.com",
            repoLink: "https://github.com/bhanu202316/portfolio",
        },
       
    ];

    return (
        <section id="projects" className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-fill h-56 rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex justify-between">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
