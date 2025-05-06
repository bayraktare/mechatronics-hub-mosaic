
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Publications = () => {
  const [publicationType, setPublicationType] = useState("all");
  
  const publications = [
    {
      title: "Multi-Object Tracking in Complex Urban Environments Using Deep Learning",
      authors: "Bayraktar, E., Yılmaz, A., et al.",
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      year: 2023,
      volume: "24",
      issue: "3",
      pages: "312-328",
      doi: "10.1109/TITS.2023.123456",
      type: "Journal"
    },
    {
      title: "Object Re-identification for Autonomous Driving: A Comprehensive Survey",
      authors: "Bayraktar, E., Demir, M.",
      journal: "Computer Vision and Image Understanding",
      year: 2022,
      volume: "215",
      pages: "103324",
      doi: "10.1016/j.cviu.2022.103324",
      type: "Journal"
    },
    {
      title: "Deep Learning Approaches for Medical Image Classification in Gastrointestinal Disease Diagnosis",
      authors: "Kaya, E., Bayraktar, E., et al.",
      journal: "Medical Image Analysis",
      year: 2023,
      volume: "82",
      pages: "102642",
      doi: "10.1016/j.media.2023.102642",
      type: "Journal"
    },
    {
      title: "AI-Enhanced Virtual Tutors for Engineering Education: An Evaluation Framework",
      authors: "Yıldız, Z., Bayraktar, E.",
      conference: "International Conference on Advanced Learning Technologies (ICALT)",
      location: "Istanbul, Turkey",
      year: 2023,
      pages: "178-185",
      doi: "10.1109/ICALT.2023.789012",
      type: "Conference"
    },
    {
      title: "Surface Defect Detection in Manufacturing Using Attention-Based Deep Neural Networks",
      authors: "Bayraktar, E., Demir, M., et al.",
      conference: "IEEE International Conference on Robotics and Automation (ICRA)",
      location: "London, UK",
      year: 2022,
      pages: "5872-5879",
      doi: "10.1109/ICRA.2022.467890",
      type: "Conference"
    },
    {
      title: "Autonomous Navigation in Unstructured Environments: A Hybrid Approach",
      authors: "Yılmaz, A., Bayraktar, E.",
      conference: "International Conference on Intelligent Robots and Systems (IROS)",
      location: "Kyoto, Japan",
      year: 2022,
      pages: "237-244",
      doi: "10.1109/IROS.2022.789012",
      type: "Conference"
    },
  ];

  const filteredPublications = publicationType === 'all' 
    ? publications 
    : publications.filter(pub => pub.type.toLowerCase() === publicationType);

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Publications</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our latest research publications in academic journals and conferences.
        </p>
        
        <div className="mt-6 flex justify-center">
          <Tabs value={publicationType} onValueChange={setPublicationType}>
            <TabsList>
              <TabsTrigger value="all">All Publications</TabsTrigger>
              <TabsTrigger value="journal">Journal Articles</TabsTrigger>
              <TabsTrigger value="conference">Conference Papers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredPublications.map((pub, index) => (
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
