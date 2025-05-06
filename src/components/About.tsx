
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const researchAreas = [
    { 
      title: "Robotics & Automation",
      description: "Development of intelligent robotic systems with applications in manufacturing, healthcare, and extreme environments."
    },
    { 
      title: "Smart Sensors & IoT",
      description: "Design and implementation of advanced sensing technologies and interconnected systems for data acquisition and analysis."
    },
    { 
      title: "Control Systems",
      description: "Research on adaptive and robust control methodologies for complex mechanical and electromechanical systems."
    },
    { 
      title: "Human-Machine Interaction",
      description: "Creating intuitive interfaces between humans and machines, including haptic feedback systems and augmented reality."
    },
  ];

  return (
    <section className="container-custom section">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="mb-6 text-center">About Our Lab</h2>
        
        <p className="mb-4 text-lg">
          The Mechatronics Research Laboratory is a multidisciplinary research facility dedicated to advancing the integration of mechanical engineering, electronics, computer science, and control engineering.
        </p>
        
        <p className="mb-4">
          Established in 2015, our lab brings together faculty, researchers, and students from diverse backgrounds to solve complex engineering challenges and develop innovative technologies that bridge the gap between theory and practical applications.
        </p>
        
        <p>
          We collaborate with industry partners and other academic institutions to ensure our research has real-world impact and contributes to the advancement of mechatronic systems across various sectors including manufacturing, healthcare, transportation, and energy.
        </p>
      </div>
      
      <div>
        <h3 className="mb-6 text-center">Research Areas</h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
