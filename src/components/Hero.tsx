
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
      <div className="container-custom py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 space-y-6 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="font-bold">
            VITAL-eR Research Laboratory
          </h1>
          <p className="text-lg md:text-xl text-green-100">
            Visual Intelligence and Autonomous Technologies in Robotics - Pioneering innovations in computer vision, autonomous systems, and intelligent robotics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
              Our Research
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-green-800">
              Join Our Team
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="/lovable-uploads/7824ff65-1dd4-481e-af10-fe91f32746b9.png" 
              alt="VITAL-eR Logo" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
