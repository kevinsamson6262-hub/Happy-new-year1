import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

/* 🔗 BACKEND URL (Render) */
const API_URL = process.env.REACT_APP_API_URL;

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'developer@example.com',
    link: 'mailto:developer@example.com',
    color: 'hover:text-primary'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@yourhandle',
    link: 'https://github.com',
    color: 'hover:text-primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/yourprofile',
    link: 'https://linkedin.com',
    color: 'hover:text-accent'
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ✅ UPDATED: CONNECTED TO RENDER BACKEND */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("🎉 Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error(error);
      toast.error('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Celebrate <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let’s connect and create something beautiful together.
            </p>
          </div>

          {/* Centered Card */}
          <div className="flex justify-center">
            <Card className="glass p-12 glow-gold w-full max-w-2xl min-h-[620px] hover:scale-[1.02] transition-all duration-500">

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Share your best experiences of 2025 and your dreams for 2026!"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-full"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

              </form>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
