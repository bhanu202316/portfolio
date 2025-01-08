function About() {
    const journey = [
      { year: "2017-20", description: "Started my journey in web development, learning the basics of HTML, CSS, and JavaScript." },
      { year: "2020-21", description: "Developed my first project, a portfolio website, and explored frameworks like React and Node.js." },
      { year: "2022-24", description: "Interned as a frontend developer, contributing to real-world projects and honing my skills." },
      { year: "202", description: "Worked on full-stack applications and improved my design skills with tools like Figma." },
    ];
  
    return (
      <>
        <section className="bg-gray-900 py-20 pt-80 text-center">
       
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-sky-50 font-bold text-5xl">About Me</h2>
            <p className="text-lg mt-4 text-gray-300">
              Explore my journey, milestones, and what drives me to keep learning and growing as a developer and designer.
            </p>
          </div>
<div className="relative w-max mx-auto mt-12">
  <div className="absolute left-1/2 h-full w-1 bg-orange-600 transform -translate-x-1/2"></div>

  <div className="space-y-9">
    {journey.map((entry, index) => (
      <div
        key={index}
        className={`relative flex items-center ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={`bg-gray-800 text-gray-200 p-9 rounded-lg shadow-lg w-80 ${
            index % 2 === 0 ? "mr-96" : "ml-90"
          }`}
        >
          <h4 className="text-lg font-bold text-sky-50">{entry.year}</h4>
          <p>{entry.description}</p>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 w-6 h-6 bg-orange-600 rounded-full border-4 border-gray-900"></div>
      </div>
    ))}
  </div>
</div>


          {/* Personal Info */}
          <div className="max-w-4xl mx-auto text-left mt-16 text-gray-300">
            <h3 className="text-3xl font-semibold text-sky-50">Who I Am</h3>
            <p className="mt-6 mb-4">
              Hi, I'm Bhanu Sharma! With a passion for web development and design, I specialize in creating user-friendly, functional, and visually appealing digital experiences.
            </p>
            <p className="mb-4">
              I thrive in environments where I can solve real-world challenges and constantly grow as a developer. I enjoy experimenting with new technologies and improving my skills to stay ahead of the curve.
            </p>
            <p>
              Outside of my work, I enjoy exploring the outdoors, photography, and playing strategic games like chess. This curiosity keeps me sharp and always learning!
            </p>
          </div>
        </section>
      </>
    );
  }
  
  export default About;
  