
import { useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeader from './SectionHeader';
import InlineLoader from './Contents/InlineLoader';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

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

      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-20 mb-20">
      <div className="max-w-4xl mx-auto sm:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <SectionHeader
            title="Get In "
            highlight="Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            data-aos="fade-right"
            className="relative w-full max-w-[25rem] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-none mx-auto px-4"
          >
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
                    className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
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
                    className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
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
                  className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent"
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
                  className="border border-gray-700/50 backdrop-blur-sm bg-gray-800/50 text-portfolio-text placeholder-gray-400 focus:border-portfolio-accent resize-none"
                  placeholder="Tell me about your project or how I can help..."
                  required
                  disabled={isLoading}
                />
              </div>
              {isLoading ? (
                <div className="w-full flex justify-center items-center py-3">
                  <InlineLoader size={60} />
                </div>
              ) : (
                <motion.div
                  key="send-button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              )}

            </form>
          </div>

          {/* Contact Info & Social */}
          <div
            className="space-y-8 relative w-full max-w-[24.5rem] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-none mx-auto px-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
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
              <div className="px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white min-w-[155px] px-4"
                    onClick={() => window.open('https://www.linkedin.com/in/dominic-gomes-443a13252/', '_blank')}
                  >
                    <Icon icon="bi:linkedin" className="text-4xl" />
                    LinkedIn
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white min-w-[140px] px-4"
                    onClick={() => window.open('https://www.facebook.com/DominicGomes24', '_blank')}
                  >
                    <Icon icon="akar-icons:facebook-fill" className="text-4xl" />
                    Facebook
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
