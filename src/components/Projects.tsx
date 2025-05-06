
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Quadruped Robot",
      description: "Development of a four-legged robot capable of navigating complex terrain autonomously using advanced sensors and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      tags: ["Robotics", "AI", "Computer Vision"],
      status: "Active"
    },
    {
      title: "Smart Prosthetic Hand",
      description: "Creating an advanced prosthetic hand with tactile feedback and intuitive control systems to improve functionality for users.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      tags: ["Biomedical", "Sensors", "Control Systems"],
      status: "Active"
    },
    {
      title: "Industrial IoT Monitoring System",
      description: "Developing a network of smart sensors for real-time monitoring and predictive maintenance of industrial machinery.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      tags: ["IoT", "Data Analytics", "Embedded Systems"],
      status: "Completed"
    },
    {
      title: "Soft Robotics Gripper",
      description: "Designing a novel soft robotic gripper capable of handling delicate objects with varying shapes and sizes.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
      tags: ["Soft Robotics", "Materials Science", "Actuation"],
      status: "Active"
    },
    {
      title: "Drone Swarm Coordination",
      description: "Research on algorithms for autonomous coordination of multiple drones in collaborative tasks.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      tags: ["Drones", "Swarm Intelligence", "Algorithms"],
      status: "Planning"
    },
    {
      title: "Haptic Feedback System",
      description: "Creating a wearable device for enhanced tactile feedback in virtual reality and teleoperation applications.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      tags: ["Haptics", "VR/AR", "Human-Machine Interface"],
      status: "Completed"
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-500";
      case "Completed": return "bg-blue-500";
      case "Planning": return "bg-amber-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Research Projects</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Explore our innovative research projects at the intersection of mechanical engineering, electronics, and computing.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden card-hover">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
