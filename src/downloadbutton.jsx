const DownloadButton = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 px-10 rounded-lg shadow-lg text-center relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
        <p>
          I’m <span className="font-bold text-green-400">Bhanu Sharma</span>, a passionate
          <span className="font-bold text-purple-400"> UX/UI Designer</span> and{" "}
          <span className="font-bold text-blue-400">Web Developer</span>. I specialize in
          crafting beautiful and functional designs that bring ideas to life. Let’s connect!
        </p>
        <br />
        <p>
          My goal is to collaborate with forward-thinking individuals and businesses to
          create impactful digital products that solve real-world problems.
        </p>
      </div>
      <a
        href="\porfolio\myself\public"
        download="Bhanu Sharma resume (3).pdf"
        className="mt-6 inline-block bg-green-600 text-white py-3 px-10 rounded-full font-medium shadow-lg hover:bg-green-500 hover:shadow-xl transition-all transform hover:scale-105"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;
