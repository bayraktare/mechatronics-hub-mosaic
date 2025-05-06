
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Teams = () => {
  const facultyMembers = [
    {
      name: "Dr. Ertugrul Bayraktar",
      title: "Laboratory Director, Assistant Professor",
      specialization: "Computer Vision, Multi-Object Tracking, Object Re-identification",
      education: "Ph.D., Istanbul Technical University Mechatronics Engineering",
      background: "Former Postdoc Researcher at the Italian Institute of Technology, Research Assistant at ITU Mechatronics Education and Research Center",
      email: "ertugrul.bayraktar@yildiz.edu.tr",
      image: "https://i.pravatar.cc/300?img=1",
      initials: "EB"
    }
  ];
  
  const researchers = [
    {
      name: "Ahmet Yılmaz",
      title: "PhD Candidate",
      research: "Autonomous Vehicle Navigation Systems",
      group: "Astrid Autonomous Vehicle Team",
      email: "a.yilmaz@vitaler.edu",
      image: "https://i.pravatar.cc/300?img=4",
      initials: "AY"
    },
    {
      name: "Elif Kaya",
      title: "PhD Candidate",
      research: "AI-Based Medical Image Analysis",
      group: "NAHAR Group",
      email: "e.kaya@vitaler.edu",
      image: "https://i.pravatar.cc/300?img=5",
      initials: "EK"
    },
    {
      name: "Mehmet Demir",
      title: "Research Assistant",
      research: "AI-Enhanced Education Systems",
      group: "AIMED Group",
      email: "m.demir@vitaler.edu",
      image: "https://i.pravatar.cc/300?img=6",
      initials: "MD"
    },
    {
      name: "Zeynep Yıldız",
      title: "Research Assistant",
      research: "Virtual Teaching Environments",
      group: "VITAL-AI Group",
      email: "z.yildiz@vitaler.edu",
      image: "https://i.pravatar.cc/300?img=7",
      initials: "ZY"
    },
  ];

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Our Team</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Meet the talented researchers and faculty members driving innovation in visual intelligence and robotics.
        </p>
      </div>
      
      <h3 className="text-2xl font-medium mb-6">Faculty</h3>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 mb-12">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base">{member.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Specialization:</p>
              <p className="text-muted-foreground mb-2">{member.specialization}</p>
              <p className="font-medium">Education:</p>
              <p className="text-muted-foreground mb-2">{member.education}</p>
              <p className="font-medium">Background:</p>
              <p className="text-muted-foreground mb-2">{member.background}</p>
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
            <CardContent className="text-center pb-3">
              <p className="text-sm text-muted-foreground">{researcher.research}</p>
            </CardContent>
            <CardFooter className="flex-col items-center pt-0">
              <p className="text-xs text-primary font-medium mb-1">{researcher.group}</p>
              <p className="text-xs text-muted-foreground">{researcher.email}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Teams;
