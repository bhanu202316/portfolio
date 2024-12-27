const DownloadButton = () => {
  return (
    <div className="bg-gray-900 p-8 shadow-lg w-[90%] md:w-[100%] mx-auto text-center">
    
      
    
      <p className="text-white text-lg mb-6">
        I’m Bhanu Sharma, a passionate UX/UI Designer and Web Developer. I love crafting 
        beautiful and functional designs that bring ideas to life. With a strong background 
        in JavaScript, React, and Python, I aim to solve real-world problems and create impactful projects.
      </p>

      <a 
        href="/path/to/your/resume.pdf" 
        download="Bhanu_Sharma_Resume.pdf" 
        className="bg-blue-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;
