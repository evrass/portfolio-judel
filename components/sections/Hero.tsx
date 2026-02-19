'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data/portfolio';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e273910_1px,transparent_1px),linear-gradient(to_bottom,#1e273910_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Name with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-lighter/50 backdrop-blur-sm border border-dark-border rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-300">{personalInfo.location}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-primary font-mono">&lt;</span>
          <span className="bg-linear-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            {personalInfo.title}
          </span>
          <span className="text-primary font-mono">/&gt;</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button variant="primary" onClick={scrollToContact}>
            <Mail className="w-5 h-5" />
            Me Contacter
          </Button>
          <Button variant="outline" href="#projects">
            Voir Mes Projets
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
         
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};