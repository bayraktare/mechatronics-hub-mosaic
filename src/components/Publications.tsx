
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Publications = () => {
  const publications = [
    {
      title: "Adaptive Control Strategies for Dynamic Quadrupedal Locomotion",
      authors: "Chen, S., Johnson, M., & Patel, A.",
      journal: "IEEE Transactions on Robotics",
      year: 2024,
      volume: "40",
      issue: "2",
      pages: "412-428",
      doi: "10.1109/TRO.2024.123456",
      type: "Journal"
    },
    {
      title: "Real-time Sensor Fusion for Autonomous Navigation in Unknown Environments",
      authors: "Kim, R., Gonzalez, L., & Chen, S.",
      conference: "International Conference on Intelligent Robots and Systems (IROS)",
      location: "Munich, Germany",
      year: 2023,
      pages: "237-244",
      doi: "10.1109/IROS.2023.789012",
      type: "Conference"
    },
    {
      title: "Soft Robotic Actuators with Embedded Sensing for Delicate Object Manipulation",
      authors: "Patel, A., Wu, D., & Johnson, M.",
      journal: "Soft Robotics",
      year: 2023,
      volume: "10",
      issue: "3",
      pages: "178-192",
      doi: "10.1089/soro.2023.0045",
      type: "Journal"
    },
    {
      title: "Machine Learning Approaches for Predictive Maintenance in Industrial Mechatronic Systems",
      authors: "Wu, D., Sokolov, E., & Chen, S.",
      journal: "Journal of Manufacturing Systems",
      year: 2023,
      volume: "67",
      issue: "1",
      pages: "52-68",
      doi: "10.1016/j.jmsy.2023.01.005",
      type: "Journal"
    },
    {
      title: "Human-Robot Collaboration Frameworks for Assembly Operations: A Systematic Review",
      authors: "Gonzalez, L., Chen, S., & Kim, R.",
      journal: "Robotics and Computer-Integrated Manufacturing",
      year: 2022,
      volume: "75",
      pages: "102310",
      doi: "10.1016/j.rcim.2022.102310",
      type: "Journal"
    },
    {
      title: "Vision-Based Object Detection and Grasping for Autonomous Robots",
      authors: "Sokolov, E., Kim, R., & Patel, A.",
      conference: "IEEE International Conference on Robotics and Automation (ICRA)",
      location: "Philadelphia, USA",
      year: 2022,
      pages: "5872-5879",
      doi: "10.1109/ICRA.2022.467890",
      type: "Conference"
    },
  ];

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Publications</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our latest research publications in academic journals and conferences.
        </p>
      </div>
      
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <CardTitle className="text-xl">{pub.title}</CardTitle>
                <Badge variant={pub.type === "Journal" ? "default" : "secondary"}>
                  {pub.type}
                </Badge>
              </div>
              <CardDescription className="text-base font-medium">{pub.authors}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                {pub.type === "Journal" ? (
                  <p>
                    {pub.journal}, {pub.year}, Vol. {pub.volume}
                    {pub.issue ? `, Issue ${pub.issue}` : ""}, pp. {pub.pages}
                  </p>
                ) : (
                  <p>
                    {pub.conference}, {pub.location}, {pub.year}, pp. {pub.pages}
                  </p>
                )}
                <p className="mt-2">
                  <span className="font-mono">DOI: </span>
                  <a href={`https://doi.org/${pub.doi}`} className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    {pub.doi}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;
