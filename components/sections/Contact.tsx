'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/lib/data/portfolio';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirection vers mailto avec les données
    const subject = `Portfolio Contact - ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Contact"
          subtitle="Discutons de votre projet ou d'opportunités de collaboration"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-white mb-6">Informations</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Localisation</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-dark-border">
                <p className="text-sm text-gray-400 mb-4">Réseaux sociaux</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary text-white transition-colors resize-none"
                    placeholder="Décrivez votre projet ou message..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};