function About() {
  const frontendSkills = [
    { name: "JavaScript", icon: "https://s2.svgbox.net/files.svg?ic=js-official" },
    { name: "React", icon: "https://s2.svgbox.net/files.svg?ic=reactjs" },
    { name: "HTML & CSS", icon: "https://s2.svgbox.net/files.svg?ic=html" },
    { name: "Tailwind CSS", icon: "https://s2.svgbox.net/files.svg?ic=tailwind" },
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: "https://s2.svgbox.net/files.svg?ic=node" },
    { name: "Python", icon: "https://s2.svgbox.net/files.svg?ic=python" },
  ];

  const otherTools = [
    { name: "Splunk", icon: "/splunk1.png" },
    { name: "Power BI", icon: "/power-bi-icon.svg" },
    { name: "Snowflake", icon: "/snowflake1.webp" },
  ];

  return (
    <section className="bg-gradient-to-l from-black to-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Knowledge in Software
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-950 p-6 rounded-lg shadow-md shadow-fuchsia-400">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-950 p-6 rounded-lg shadow-md shadow-fuchsia-400">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-950 p-6 rounded-lg shadow-md mx-auto max-w-3xl shadow-fuchsia-400">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">
            Other Tools
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-center">
            {otherTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 mb-2"
                />
                <h4 className="text-lg font-semibold text-white">
                  {tool.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
