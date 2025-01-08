const DownloadButton = () => {
  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-lg text-center h-screen">
     
      <div className="text-white text-lg mb-6 p-20 px-24 ">
      <p>
        I’m Bhanu Sharma, a passionate UX/UI Designer and Web Developer. I specialize in 
        crafting beautiful and functional designs that bring ideas to life. Let’s connect!
      </p>
      <br></br>
      <p>My goal is to collaborate with forward-thinking individuals and businesses to 
      create impactful digital products that solve real-world problems.</p>
      </div>
      <a 
        href="/path/to/your/resume.pdf" 
        download="Bhanu_Sharma_Resume.pdf" 
        className="bg-transparent text-white py-3 px-10 border-2 border-green-600 font-medium hover:bg-green-500 transition-all"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;
