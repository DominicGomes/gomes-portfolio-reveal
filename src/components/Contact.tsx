
import { useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeader from './SectionHeader';
import InlineLoader from './Contents/InlineLoader';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In "
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />      
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
                    className="bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
                    placeholder="Your Name"
                    required
                    disabled={isLoading}
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
                    className="bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
                    placeholder="your.email@example.com"
                    required
                    disabled={isLoading}
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
                  className="bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
                  placeholder="What's this about?"
                  disabled={isLoading}
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
                  className="bg-gray-800/50 border-gray-700 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent resize-none"
                  placeholder="Tell me about your project or how I can help..."
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <InlineLoader size={20} />
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="font-montserrat font-bold text-xl mb-4 text-portfolio-accent">
                Let's Connect
              </h3>
              <p className="text-portfolio-text/80 mb-6 leading-relaxed text-justify">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and development.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2">Email</h4>
                  <p className="text-portfolio-text/70">dominicgomes24@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-portfolio-text mb-2">Location</h4>
                  <p className="text-portfolio-text/70">147/ J East Rajabaza, Farmgate, Dhaka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="font-montserrat font-bold text-xl mb-4 text-portfolio-accent">
                Find Me Online
              </h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  onClick={() => window.open('https://linkedin.com/in/dominicgomes', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
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
