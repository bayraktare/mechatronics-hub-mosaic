
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";

const Courses = () => {
  const coursesList = [
    {
      code: "MECH 301",
      title: "Introduction to Mechatronics",
      description: "Fundamentals of mechatronic systems, combining mechanical, electronic, and software components.",
      level: "Undergraduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "MECH 405",
      title: "Robotic Systems Design",
      description: "Design principles for robotic systems, including kinematics, dynamics, and control architectures.",
      level: "Undergraduate",
      semester: "Spring",
      credits: 4
    },
    {
      code: "MECH 507",
      title: "Advanced Control Systems",
      description: "Modern control theory and applications in mechatronic systems, including state-space methods and digital control.",
      level: "Graduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "MECH 602",
      title: "Intelligent Sensors and Actuators",
      description: "Design and application of smart sensors and actuators in mechatronic systems, including signal processing and condition monitoring.",
      level: "Graduate",
      semester: "Spring",
      credits: 3
    },
    {
      code: "MECH 520",
      title: "Mechatronics Laboratory",
      description: "Hands-on experience with sensors, actuators, microcontrollers, and real-time control of mechatronic systems.",
      level: "Graduate",
      semester: "Both",
      credits: 2
    },
    {
      code: "MECH 410",
      title: "Autonomous Systems",
      description: "Principles and applications of autonomous mechatronic systems, including navigation, perception, and decision-making.",
      level: "Undergraduate",
      semester: "Spring",
      credits: 3
    },
  ];

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Courses</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our department offers a variety of courses in mechatronics engineering at both undergraduate and graduate levels.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coursesList.map((course, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant={course.level === "Undergraduate" ? "default" : "secondary"}>
                  {course.level}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Book className="h-4 w-4 mr-1" />
                  <span>{course.credits} credits</span>
                </div>
              </div>
              <CardTitle className="mt-2 text-xl flex items-center gap-2">
                <span className="text-primary font-mono text-base">{course.code}</span>
                {course.title}
              </CardTitle>
              <CardDescription>
                {course.semester} Semester
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Courses;
