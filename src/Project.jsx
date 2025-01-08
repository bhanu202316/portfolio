import Hero from './Hero';
import DownloadButton from './downloadbutton';
import About from './About';
const Overlap = () => {
  return (
    <div className="relative">
      
      <Hero />
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-[60%]">
        <DownloadButton />
      </div>
      <About />
    </div>
  );
};

export default Overlap;
