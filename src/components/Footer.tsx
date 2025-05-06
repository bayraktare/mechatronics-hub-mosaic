
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7824ff65-1dd4-481e-af10-fe91f32746b9.png" 
                  alt="VITAL-eR Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-blue-700">VITAL-eR</span>
                <span className="text-xs leading-tight">
                  Visual Intelligence and Autonomous Technologies in Robotics
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Pioneering the future of intelligent systems through interdisciplinary research and innovation in robotics and computer vision.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <Button variant="ghost" size="icon" className="rounded-full text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-4 text-blue-800">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Courses</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Research</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-blue-800">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Publications</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Lab Resources</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Student Opportunities</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-blue-700">Equipment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-blue-800">Contact</h4>
              <address className="not-italic space-y-2 text-muted-foreground">
                <p>YTU Yıldız Campus</p>
                <p>Istanbul, Turkey</p>
                <p>contact@vital-er.edu</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} VITAL-eR Laboratory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
