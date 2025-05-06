
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      date: 'May 1, 2025',
      title: 'New Research Grant Awarded',
      description: 'Our lab has been awarded a $2.5M grant from the National Science Foundation to research advanced robotic control systems.',
    },
    {
      id: 2,
      date: 'April 15, 2025',
      title: 'Paper Accepted at IEEE Robotics Conference',
      description: 'Our team\'s paper on "Adaptive Control Mechanisms for Autonomous Drones" has been accepted for presentation at the upcoming IEEE Robotics Conference.',
    },
    {
      id: 3,
      date: 'April 2, 2025',
      title: 'Summer Research Opportunities',
      description: 'Applications are now open for undergraduate summer research positions. Deadline is May 15th.',
    },
    {
      id: 4,
      date: 'March 22, 2025',
      title: 'New Lab Equipment Installation',
      description: 'Our new motion capture system has been installed and is now available for research projects.',
    },
  ];
  
  return (
    <section className="section container-custom">
      <h2 className="mb-8 text-center">Latest Announcements</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {announcements.map(announcement => (
          <Card key={announcement.id} className="card-hover">
            <CardHeader className="pb-2">
              <CardDescription>{announcement.date}</CardDescription>
              <CardTitle className="text-xl">{announcement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{announcement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
