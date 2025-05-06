
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll respond as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="container-custom section">
      <div className="text-center mb-12">
        <h2 className="mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions about our research or interested in collaboration opportunities?
          Get in touch with our team.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Visit Our Lab</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Address</h4>
              <address className="not-italic text-muted-foreground">
                Mechatronics Research Laboratory<br />
                Engineering Building, Room 305<br />
                123 University Avenue<br />
                Techville, CA 90210
              </address>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <p className="text-muted-foreground">contact@mechlab.edu</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Phone</h4>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Office Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            
            <div className="mt-6">
              <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
                {/* This would be a map component */}
                <div className="w-full h-full flex items-center justify-center bg-blue-50 text-primary">
                  <p className="text-center p-4">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
