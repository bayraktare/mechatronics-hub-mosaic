
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CustomProjects = () => {
  const projects = [
    {
      title: "Autonomous Navigation System for Urban Environments",
      description: "Development of robust perception and navigation algorithms for autonomous vehicles in complex urban scenarios.",
      category: "TÜBİTAK",
      status: "Active",
      team: "Astrid Autonomous Vehicle Team"
    },
    {
      title: "AI-Enhanced Diagnostic Tools for Gastrointestinal Diseases",
      description: "Creating novel machine learning approaches for early detection of liver and stomach diseases through medical imaging analysis.",
      category: "KA HED",
      status: "Active",
      team: "NAHAR Group"
    },
    {
      title: "Virtual Teaching Assistant for Engineering Education",
      description: "Building adaptive AI tutors with natural language processing capabilities to enhance mechatronics engineering education.",
      category: "ADEP",
      status: "Active",
      team: "AIMED Group"
    },
    {
      title: "Cross-Cultural AI Education Framework",
      description: "Developing standardized methods for implementing AI education across diverse educational systems in Europe.",
      category: "Erasmus+",
      status: "Active",
      team: "VITAL-AI Group"
    },
    {
      title: "Automated Quality Inspection System",
      description: "Creating a computer vision-based quality control system for manufacturing production lines.",
      category: "Industry",
      status: "Completed",
      team: "Computer Vision Group"
    },
    {
      title: "Robotic Arm Control for Precise Manipulation",
      description: "Developing advanced control algorithms for robotic arms performing high-precision tasks in restricted environments.",
      category: "Undergraduate Research",
      status: "Active",
      team: "Robotics Group"
    }
  ];

  // Badge color based on category
  const getBadgeVariant = (category: string) => {
    switch(category) {
      case "TÜBİTAK": return "default";
      case "KA HED": return "secondary";
      case "ADEP": return "outline";
      case "Erasmus+": return "destructive";
      case "Industry": return "default";
      default: return "outline";
    }
  };

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Research Projects</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our ongoing and completed research projects in visual intelligence, autonomous systems, and AI applications.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant={getBadgeVariant(project.category)}>
                  {project.category}
                </Badge>
                <Badge variant={project.status === "Active" ? "default" : "outline"}>
                  {project.status}
                </Badge>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.team}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CustomProjects;
