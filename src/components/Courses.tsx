
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";

const Courses = () => {
  const coursesList = [
    {
      code: "CSE 101",
      title: "Computer Programming and Algorithms",
      description: "Introduction to programming concepts, algorithmic thinking, and problem-solving techniques.",
      level: "Undergraduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "CSE 201",
      title: "Object Oriented Programming",
      description: "Principles of object-oriented software development including classes, inheritance, polymorphism, and design patterns.",
      level: "Undergraduate",
      semester: "Spring",
      credits: 3
    },
    {
      code: "CSE 350",
      title: "Introduction to Machine Learning",
      description: "Fundamental concepts of machine learning, supervised and unsupervised learning algorithms, and their applications.",
      level: "Undergraduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "CSE 360",
      title: "Introduction to Artificial Intelligence",
      description: "Core principles of artificial intelligence, knowledge representation, reasoning, and problem solving.",
      level: "Undergraduate",
      semester: "Spring",
      credits: 3
    },
    {
      code: "CSE 380",
      title: "Introduction to Image Processing",
      description: "Basic techniques for digital image processing, enhancement, segmentation, and feature extraction.",
      level: "Undergraduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "MECH 550",
      title: "Robot Vision",
      description: "Advanced concepts in computer vision for robotics applications including object detection, tracking, and visual SLAM.",
      level: "Graduate",
      semester: "Fall",
      credits: 3
    },
    {
      code: "MECH 560",
      title: "Machine Vision Applications in Mechatronics Engineering",
      description: "Implementation of vision systems in mechatronics, including industrial inspection, quality control, and autonomous navigation.",
      level: "Graduate",
      semester: "Spring",
      credits: 3
    }
  ];

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Courses</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our department offers a variety of courses in computer vision, robotics, and artificial intelligence at both undergraduate and graduate levels.
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
