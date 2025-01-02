function About() {
  const skills = [
    { 
      name: "JavaScript", 
      description: "Proficient in modern JavaScript, including ES6+ features and frameworks.",
      icon: "/javacript.webp", 
      proficiency: 90 
    },
    { 
      name: "React", 
      description: "Experienced in building dynamic and scalable web applications using React.",
      icon: "/react.png", 
      proficiency: 85 
    },
    { 
      name: "Python", 
      description: "Skilled in Python for scripting, data analysis, and backend development.",
      icon: "/python.png", 
      proficiency: 80 
    },
    { 
      name: "HTML & CSS", 
      description: "Strong foundation in creating responsive layouts and UI designs.",
      icon: "/html css.jpeg", 
      proficiency: 95 
    },
    { 
      name: "Tailwind CSS", 
      description: "Efficient in designing modern interfaces with Tailwind CSS utility classes.",
      icon: "/tailwind.png", 
      proficiency: 85 
    },
    { 
      name: "Node.js", 
      description: "Knowledgeable in developing backend services and APIs with Node.js.",
      icon: "/node.png", 
      proficiency: 75 
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-44">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Knowledge in Software
        </h2>

        {/* Vertical Skills List */}
        <div className="space-y-1">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 pb-6"
            >
              {/* Skill Header */}
              <div className="flex items-center space-x-6 ">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 "
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full bg-gray-300 h-3">
                  <div
                    className="bg-emerald-500 h-3"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-50 mt-1 text-right">
                  {skill.proficiency}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
