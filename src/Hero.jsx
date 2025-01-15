import { TypeAnimation } from 'react-type-animation';
function Hero() {
  const intoProject = ()=>{
    const projectsection = document.getElementById("projects")
    if (projectsection){
      projectsection.scrollIntoView({behavior:"smooth", block: "start"})
    }
  }
  return (
    <>

      <section className="bg-gradient-to-l from-black to-gray-950 px-36 md:px-32  pb-44 min-h-[90vh] relative">
        
        <div className="flex items-center justify-between pb-44">
        
          <div className='pt-20'>
            <h1 className="text-white text-8xl font-bold leading-tight">
              I am
            </h1>
            <h1 className="text-white text-8xl font-bold mt-4">
              Bhanu Sharma
            </h1>
            <div className="mt-6">
              <TypeAnimation
                sequence={['DATA ENGINEER', 1000,'UX/UI DESIGNER', 1000, 'WEB DEVELOPER', 1000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
                className="text-slate-100"
              />
            </div>

            <button
            onClick={intoProject}
            className="mt-10 py-4 px-8 bg-gradient-to-r from-sky-400 to-blue-600 text-white text-lg md:text-xl rounded-lg font-medium hover:scale-105 hover:shadow-xl transition-all">
              See My Work
            </button>
          </div>

        
          <div className="relative">

            <div className="relative overflow-hidden z-10">
              <img
                src="Bhanu_img.png"
                alt="Bhanu Sharma"
                className="w-96 h-screen object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
