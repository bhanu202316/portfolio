function Experience() {
    const experiences = [
      {
        title: "Data Engineer",
        company: "64 Squares LLC",
        date: "Present",
        description: [
          "Designing and maintaining efficient data pipelines.",
          "Collaborating with cross-functional teams to deliver insights.",
          "Optimizing data storage and retrieval systems.",
        ],
      },
      {
        title: "React Training",
        company: "Infowiz Software Solution",
        date: "Completed in 3 months",
        description: [
          "Learned advanced concepts of React.js and its ecosystem.",
          "Built several hands-on projects to apply React skills.",
          "Gained expertise in state management and component design.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Experience
          </h2>
  
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-transparent shadow-sm rounded-md shadow-pink-400 p-6"
              >
                <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-sky-50 italic">
                    {experience.date}
                  </span>
                </div>
                <p className="text-yellow-50 mt-1">
                  <span className="font-semibold text-emerald-500">
                    {experience.company}
                  </span>
                </p>
  
                <ul className="list-disc list-inside text-yellow-50 mt-4 space-y-2">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  