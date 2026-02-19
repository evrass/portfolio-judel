'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data/portfolio';
import { Github, ExternalLink, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Projets Personnels"
          subtitle="Quelques projets SaaS développés pour mettre en pratique mes compétences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
          <Card key={project.id} className="group">
              {/* Project Image Placeholder */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <motion.div
                  className="text-6xl opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  💻
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-br from-dark-lighter to-transparent" />
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{project.tagline}</p>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark text-xs rounded text-gray-400 border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <Button variant="outline" href={project.github} className="flex-1 text-sm py-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                )}
                {project.live && (
                  <Button variant="primary" href={project.live} className="flex-1 text-sm py-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};