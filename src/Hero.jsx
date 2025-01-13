import { TypeAnimation } from 'react-type-animation';
function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-36 md:px-32 pt-28 pb-44 min-h-[90vh] relative">
        <div className="flex items-center justify-between pb-44">
        
          <div>
            <h1 className="text-white text-8xl font-bold leading-tight">
              I am
            </h1>
            <h1 className="text-white text-8xl font-bold mt-4">
              Bhanu Sharma
            </h1>
            <div className="mt-6">
              <TypeAnimation
                sequence={['UX/UI DESIGNER', 1000, 'WEB DEVELOPER', 1000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
                className="text-slate-100"
              />
            </div>
            <button className="mt-10 py-4 px-8 bg-gradient-to-r from-sky-400 to-blue-600 text-white text-lg md:text-xl rounded-lg font-medium hover:scale-105 hover:shadow-xl transition-all">
              View My Work
            </button>
          </div>

        
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        
            <div className="relative rounded-full border-2  border-gray-800 overflow-hidden shadow-lg z-10">
              <img
                src="photo-removebg-preview.png"
                alt="Bhanu Sharma"
                className="w-72 h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
