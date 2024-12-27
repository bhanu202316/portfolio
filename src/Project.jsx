import Hero from './Hero';
import About from './About';
import DownloadButton from './downloadbutton';

const Overlap = () => {
  return (
    <div className="relative">
      <Hero />
      
      {/* Overlapping Container */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <DownloadButton />
      </div>
      
      <About />
    </div>
  );
};

export default Overlap;
