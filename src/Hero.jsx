import { TypeAnimation } from 'react-type-animation';
function Hero() {
    return (
      <>
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 px-36 md:px-32 pt-28 pb-44 min-h-[90vh] relative">
        <div className='flex'>
          <div className="pb-44">
          <h1 className="text-white text-8xl font-bold leading-tight">
            I am
          </h1>
          <h1 className="text-white text-8xl font-bold mt-4">
            Bhanu Sharma
          </h1>
          <div className ="mt-6">
          <TypeAnimation
          sequence={[
            'UX/UI DESIGNER',
            1000,
            'WEB DEVELOPER',
            1000
          ]}
          wrapper="span"
      speed={40}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
      className='text-slate-100 '
    /></div>
          <button className="mt-10 py-4 px-8 bg-sky-300 text-white text-lg md:text-xl rounded-lg font-medium hover:bg-red-300 transition-all">
            View My Work
          </button></div>
          <div className="bg-gray-700 shadow-md h-1/2 rounded-full">
          <img src="photo-removebg-preview.png"
          className=' '>
          </img></div>
          </div>
        </section>
      </>
    );
  }
  
  export default Hero;
  