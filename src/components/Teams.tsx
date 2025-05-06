
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Teams = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Laboratory Director",
      specialization: "Robotic Control Systems",
      email: "sarah.chen@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=1",
      initials: "SC"
    },
    {
      name: "Dr. Marcus Johnson",
      title: "Senior Researcher",
      specialization: "Autonomous Systems",
      email: "m.johnson@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=2",
      initials: "MJ"
    },
    {
      name: "Dr. Amina Patel",
      title: "Assistant Professor",
      specialization: "Smart Materials & Sensors",
      email: "a.patel@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=3",
      initials: "AP"
    },
  ];
  
  const researchers = [
    {
      name: "Robert Kim",
      title: "PhD Candidate",
      research: "Adaptive Control for Soft Robotics",
      email: "r.kim@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=4",
      initials: "RK"
    },
    {
      name: "Lucia Gonzalez",
      title: "PhD Candidate",
      research: "Human-Robot Collaboration",
      email: "l.gonzalez@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=5",
      initials: "LG"
    },
    {
      name: "David Wu",
      title: "Research Assistant",
      research: "IoT Systems for Industrial Applications",
      email: "d.wu@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=6",
      initials: "DW"
    },
    {
      name: "Elena Sokolov",
      title: "Research Assistant",
      research: "Computer Vision for Robotics",
      email: "e.sokolov@mechlab.edu",
      image: "https://i.pravatar.cc/300?img=7",
      initials: "ES"
    },
  ];

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Our Team</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Meet the talented researchers and faculty members driving innovation in mechatronics engineering.
        </p>
      </div>
      
      <h3 className="text-2xl font-medium mb-6">Faculty</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Specialization:</p>
              <p className="text-muted-foreground mb-2">{member.specialization}</p>
              <p className="font-medium">Contact:</p>
              <p className="text-muted-foreground">{member.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h3 className="text-2xl font-medium mb-6">Researchers</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {researchers.map((researcher, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarImage src={researcher.image} alt={researcher.name} />
                <AvatarFallback>{researcher.initials}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{researcher.name}</CardTitle>
              <CardDescription>{researcher.title}</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-sm text-muted-foreground">{researcher.research}</p>
            </CardContent>
            <CardFooter className="pt-0 justify-center">
              <p className="text-xs text-muted-foreground">{researcher.email}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Teams;
