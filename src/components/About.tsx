
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const researchGroups = [
    { 
      title: "Astrid Autonomous Vehicle Team",
      description: "Established in October 2020, this team focuses on end-to-end L5 level autonomous R&D and is located at YTU Yıldız Campus."
    },
    { 
      title: "NextGen Advanced Health Assistants Research (NAHAR)",
      description: "Proposes a systematic approach to address critical diagnostic challenges for liver and stomach diseases by establishing a strong relationship between healthcare, artificial intelligence, data science and software development."
    },
    { 
      title: "AIMED: AI-Driven Mechatronics Education Digitization",
      description: "Enhances the delivery of theoretical knowledge and introduces innovative approaches to evaluating the understandability and impact of lessons taught with virtual avatars."
    },
    { 
      title: "VITAL-AI",
      description: "A forward-looking initiative that empowers educators across secondary and higher education to become creative designers and producers of AI-supported digital educational content."
    },
    { 
      title: "Undergraduate Research Groups",
      description: "Smaller groups for undergraduate students' graduation thesis, focusing on mobile robots and robotic arms."
    }
  ];

  return (
    <section className="container-custom section">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="mb-6 text-center">About Our Lab</h2>
        
        <p className="mb-4 text-lg">
          The Visual Intelligence and Autonomous Technologies in Robotics (VITAL-eR) is a multidisciplinary research facility dedicated to advancing computer vision, autonomous systems, and intelligent robotics.
        </p>
        
        <p className="mb-4">
          Our lab brings together faculty, researchers, and students from diverse backgrounds to solve complex challenges in visual intelligence, autonomous navigation, healthcare diagnostics, and AI-driven education.
        </p>
        
        <p>
          We collaborate with industry partners and other academic institutions to ensure our research has real-world impact and contributes to the advancement of robotics and AI systems across various sectors including transportation, healthcare, education, and manufacturing.
        </p>
      </div>
      
      <div>
        <h3 className="mb-6 text-center">Research Groups</h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {researchGroups.map((group, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{group.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
