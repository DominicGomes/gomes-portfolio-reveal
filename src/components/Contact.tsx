
import { useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeader from './SectionHeader';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      await emailjs.send(
        'dominic_gomes',      
        'template_677sw3e',     
        {
          to_name: 'Dominic',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Contact Form Message',
          message: formData.message,
          reply_to: formData.email
        },
        'K6n6cZgLK3ukzK_2W' 
      );

      toast.success('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In "
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />      
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Contact Form */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent h-12"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent h-12"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent h-12"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent resize-none"
                  placeholder="Tell me about your project or how I can help..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-semibold py-3 h-12 rounded-lg transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="font-montserrat font-bold text-xl mb-4 text-portfolio-accent">
                Let's Connect
              </h3>
              <p className="text-portfolio-text/80 mb-6 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and development.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2 text-sm sm:text-base">Email</h4>
                  <p className="text-portfolio-text/70 text-sm sm:text-base break-all">dominicgomes24@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2 text-sm sm:text-base">Location</h4>
                  <p className="text-portfolio-text/70 text-sm sm:text-base">147/ J East Rajabaza, Farmgate, Dhaka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="font-montserrat font-bold text-xl mb-4 text-portfolio-accent">
                Find Me Online
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white h-12"
                  onClick={() => window.open('https://linkedin.com/in/dominicgomes', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white h-12"
                  onClick={() => window.open('https://facebook.com/dominicgomes', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
