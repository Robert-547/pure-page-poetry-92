import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const heroRef = useScrollAnimation<HTMLElement>();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5 section-animate"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team of pharmaceutical experts. We're here to help with your questions and partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className="section-animate"
            >
              <Card className="card-hover hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full hover-glow">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div 
              ref={infoRef}
              className="section-animate"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    We're committed to advancing pharmaceutical innovation and would love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="card-float hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Phone</h4>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-float hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-muted-foreground">contact@pinnacle.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-float hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Address</h4>
                          <p className="text-muted-foreground">
                            123 Pharmaceutical Ave<br />
                            Innovation District, NY 10001
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;