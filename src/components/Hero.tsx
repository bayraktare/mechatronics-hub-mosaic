
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container-custom py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 space-y-6 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="font-bold">
            VITAL-eR Research Laboratory
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Visual Intelligence and Autonomous Technologies in Robotics - Pioneering innovations in computer vision, autonomous systems, and intelligent robotics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
              Our Research
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-blue-800">
              Join Our Team
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square max-w-md">
            {/* Abstract representation of a vision-based autonomous system */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-4 border-blue-300 rounded-full animate-pulse opacity-20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 border-4 border-blue-200 rounded-full animate-pulse opacity-40"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/3 h-1/3 bg-blue-200 rounded-lg rotate-45 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/4 h-1/4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
