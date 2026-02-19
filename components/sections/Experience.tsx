'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { experiences } from '@/lib/data/portfolio';
import { MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Expérience Professionnelle"
          subtitle="Mon parcours professionnel et les réalisations clés"
        />

        <div className="space-y-8">
          {/* Suppression de 'index' car exp.id est utilisé comme clé */}
          {experiences.map((exp) => (
            <Card key={exp.id} className="relative">
              {/* Timeline Indicator */}
              <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-dark">
                <Briefcase className="w-4 h-4 text-dark" />
              </div>

              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period} ({exp.duration})</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Réalisations Clés
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark text-xs rounded-md text-gray-300 border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};