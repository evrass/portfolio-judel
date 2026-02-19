'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/50 border-t border-dark-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">Judel</span> Sita Moussounda
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ingénieur logiciel passionné par le développement de solutions scalables et sécurisées.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {['Compétences', 'Expérience', 'Projets', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Me Suivre</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Judel Sita Moussounda. Créé avec
            <Heart className="w-4 h-4 text-primary fill-primary" />
            et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};