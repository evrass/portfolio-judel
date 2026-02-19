'use client';

import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { skills } from '@/lib/data/portfolio';
import { Code2, Cloud, Shield, Database, Smartphone, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Code2,
    items: skills.backend,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    icon: Layers,
    items: skills.frontend,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: skills.mobile,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    items: skills.cloud,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'DevOps & CI/CD',
    icon: Layers,
    items: skills.devops,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Sécurité',
    icon: Shield,
    items: skills.security,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Bases de Données',
    icon: Database,
    items: skills.databases,
    color: 'from-yellow-500 to-amber-500',
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Compétences Techniques"
          subtitle="Stack technologique et expertises acquises au fil de mes expériences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} hover>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-linear-to-br ${category.color} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 bg-linear-to-br ${category.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white flex-1">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-dark text-sm rounded-full text-gray-300 border border-dark-border hover:border-primary/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};