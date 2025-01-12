function About() {
  const journey = [
    {
      year: "2021",
      description:
        "Discovered my passion for computers and development. Started exploring the basics of programming and web development.",
    },
    {
      year: "2022",
      description:
        "Enrolled in an MCA program. Learned foundational concepts of computer science and began experimenting with HTML, CSS, and JavaScript.",
    },
    {
      year: "2023",
      description:
        "Started a 3-month intensive training program in React. Built several small projects to strengthen my frontend skills.",
    },
    {
      year: "2024",
      description:
        "Completed MCA. Secured an internship as a Frontend Developer at 64 Squares LLC, gaining hands-on experience in React development.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-center">
 

      {/* Section Header */}
      <div className="max-w-4xl mx-auto pt-48">
        <h2 className="text-sky-50 font-bold text-6xl tracking-wide">
          About Me
        </h2>
        <p className="text-lg mt-4 text-gray-300">
          Explore my journey, milestones, and what drives me to keep learning
          and growing as a developer and designer.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="relative max-w-6xl mx-auto mt-16">
        <div className="absolute left-1/2 w-1 bg-orange-600 transform -translate-x-1/2 h-full"></div>
        <div className="space-y-12">
          {journey.map((entry, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`bg-gray-800 text-gray-200 p-6 shadow-md w-5/12 shadow-fuchsia-400 transform transition-all duration-300 hover:scale-110`}
              >
                <h4 className="text-lg font-bold text-sky-50">{entry.year}</h4>
                <p className="mt-3">{entry.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Who I Am Section */}
      <div className="max-w-4xl mx-auto text-left mt-16 text-gray-300 px-6">
        <h3 className="text-3xl font-semibold text-sky-50">Who I Am</h3>
        <p className="mt-6 mb-4">
          Hi, I'm Bhanu Sharma! With a passion for web development and design,
          I specialize in creating user-friendly, functional, and visually
          appealing digital experiences.
        </p>
        <p className="mb-4">
          I thrive in environments where I can solve real-world challenges and
          constantly grow as a developer. I enjoy experimenting with new
          technologies and improving my skills to stay ahead of the curve.
        </p>
        <p>
          Outside of my work, I enjoy exploring the outdoors like cricket,
          badminton, and playing video games. This curiosity keeps me sharp and
          always learning!
        </p>
      </div>
    </section>
  );
}
export default About